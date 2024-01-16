import { Repository } from "@infra-blocks/github";

export interface Inputs {
  "template-repository"?: string;
  "github-pat"?: string;
}

export interface HandlerParams {
  /**
   * The template repository's full name (owner/repo)
   */
  templateRepository: string;
  /**
   * The GitHub access token to make authenticated calls to the API.
   */
  gitHubPat: string;
}

export interface HandlerOutputs {
  instances: Array<Repository>;
  "instances-count": number;
}
