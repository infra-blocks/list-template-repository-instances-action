import { z } from "zod";
import { ListTemplateRepositoryInstancesActionError } from "./error.js";
import { HandlerParams, Inputs } from "./types.js";
import { context } from "@actions/github";

export function parseInputs(inputs: Inputs): HandlerParams {
  try {
    return z
      .object({
        // Default to github.repository.
        "template-repository": z
          .string()
          .default(() => `${context.repo.owner}/${context.repo.repo}`),
        "github-pat": z.string(),
      })
      .transform((parsed) => ({
        templateRepository: parsed["template-repository"],
        gitHubPat: parsed["github-pat"],
      }))
      .parse(inputs);
  } catch (err) {
    throw new ListTemplateRepositoryInstancesActionError(
      { cause: err as Error },
      `error parsing inputs ${JSON.stringify(inputs)}`,
    );
  }
}
