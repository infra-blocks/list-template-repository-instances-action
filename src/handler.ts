import {
  GitHubClient,
  Repository,
  RepositoryShort,
} from "@infra-blocks/github";
import { ListTemplateRepositoryInstancesActionError } from "./error.js";
import { HandlerOutputs, HandlerParams } from "./types.js";

export class ListTemplateRepositoryInstancesHandler {
  private readonly templateRepository: string;
  private readonly github: GitHubClient;

  constructor(params: { templateRepository: string; github: GitHubClient }) {
    const { templateRepository, github } = params;
    this.templateRepository = templateRepository;
    this.github = github;
  }

  async handle(): Promise<HandlerOutputs> {
    const instances = await this.findTemplateRepositoryInstances();
    return {
      instances,
      "instances-count": instances.length,
    };
  }

  private async findTemplateRepositoryInstances(): Promise<Array<Repository>> {
    const owner = this.getOwner();
    const repos = await this.listOwnerRepos({ owner });

    // Get the full information on each repo to extract the template.
    const fullRepos = await Promise.all(
      repos.map((repo) =>
        this.github.getRepository({ owner, repository: repo.name }),
      ),
    );
    // Keep only the repos that have the target template repository.
    return fullRepos.filter(
      (repo) => repo.template_repository?.full_name === this.templateRepository,
    );
  }

  private async listOwnerRepos(params: {
    owner: string;
  }): Promise<Array<RepositoryShort>> {
    const { owner } = params;

    // First, we need to figure out if the owner is a user or an org, as they don't have the same
    // endpoints to list their repos.
    const ownerInfo = await this.github.getUser({ user: owner });
    switch (ownerInfo.type) {
      case "User":
        return this.github.listUserRepositories({ user: owner });
      case "Organization":
        return this.github.listOrganizationRepositories({
          organization: owner,
        });
      default:
        throw new ListTemplateRepositoryInstancesActionError(
          {},
          `unknown owner type: ${ownerInfo.type} for owner: ${owner}`,
        );
    }
  }

  private getOwner(): string {
    return this.templateRepository.split("/")[0];
  }
}
export function handler(params: HandlerParams): Promise<HandlerOutputs> {
  const { gitHubPat, templateRepository } = params;
  const github = GitHubClient.create({ gitHubToken: gitHubPat });

  return new ListTemplateRepositoryInstancesHandler({
    templateRepository,
    github,
  }).handle();
}
