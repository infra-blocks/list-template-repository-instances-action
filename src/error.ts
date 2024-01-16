import VError from "verror";

export class ListTemplateRepositoryInstancesActionError extends VError {
  constructor(
    options: Omit<VError.Options, "name">,
    message: string,
    ...params: unknown[]
  ) {
    super(
      { ...options, name: ListTemplateRepositoryInstancesActionError.name },
      message,
      ...params,
    );
  }
}
