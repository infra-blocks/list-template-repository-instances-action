# list-template-repository-instances-action

This GitHub Action lists all the repositories that have been instantiated using the provided template repository
as input.

Given a template repository `org/template-repo`, this action will return all the repos under organization
`org` that have been created with the `org/template-repo` template.

The output is a JSON stringified list of all the responses of the [api calls](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository)
for repositories that have the "template_repository" field matching the provided input.

## Usage

```yaml
jobs:
  do-stuff:
    steps:
      # List repository instances
      - name: List repositories instantiating this template
        id: list-template-instances
        uses: infrastructure-blocks/list-template-repository-instances-action@v0
        with:
          # A PAT should be used here as we are querying an organization or a user's list of repositories
          github-token: ${{ secrets.github-pat }}
      - name: Do something with the ouput
        run: |
          echo "Found repos: ${{ (fromJson(steps.list-template-instances.outputs.instances)).*.full_name }}"
```

## Development

This project is written in Typescript and leverages `nvm` to manage its version. It also uses Git hooks
to automatically build and commit compiled code. This last part emerges from the fact that GitHub actions
run Javascript (and not typescript) and that all the node_modules/ are expected to be provided in the Git
repository of the action.

Having a Git hook to compile automatically helps in diminishing the chances that a developer forgets to
provide the compiled sources in a change request.

### Setup

Once `nvm` is installed, simply run the following:

```
nvm install
npm install
``` 

### Releasing

The releasing is handled at git level with semantic versioning tags. Those are automatically generated and managed
by the [git-tag-semver-from-label-workflow](https://github.com/infrastructure-blocks/git-tag-semver-from-label-workflow).
