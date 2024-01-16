<<<<<<< HEAD
# list-template-repository-instances-action

This GitHub Action lists all the repositories that have been instantiated using the provided template repository
as input.

Given a template repository `org/template-repo`, this action will return all the repos under organization
`org` that have been created with the `org/template-repo` template.

The output is a JSON stringified list of all the responses of the [api calls](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository)
for repositories that have the "template_repository" field matching the provided input.
=======
# docker-action-template

A template repository for GitHub Actions hosted as docker images on registries.

## Instantiation checklist

- Remove the [trigger update from template workflow](.github/workflows/trigger-update-from-template.yml)
- Rename the docker image/container in [docker compose file](./docker/docker-compose.yml)
- Edit the package.json to reflect the action's name and links
- Run `nvm install`
- Run `npm install`
- Replace the self-test section of the [build-image workflow](.github/workflows/build-image.yml).
- Set up code coverage
- Replace the summary and the action usage section in this document.

## Inputs

|    Name       | Required | Description      |
|:-------------:|:--------:|------------------|
| example-input |  true    | A useless input. |

## Outputs

|     Name       | Description                    |
|:--------------:|--------------------------------|
| example-output | An equivalently useless output |
>>>>>>> template/master

## Usage

```yaml
<<<<<<< HEAD
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
=======
- uses: docker://public.ecr.aws/infrastructure-blocks/docker-typescript-action-template:v1
  with:
    example-input: hello
```

## Releasing

The CI fully automates the release process. The only manual intervention required is to assign a semantic
versioning label to the pull request before merging (this is a required check). Upon merging, the
release process kicks off. It manages a set of semantic versioning git tags,
as described [here](https://github.com/infrastructure-blocks/git-tag-semver-action).

Upon tagging the default branch, jobs to tag docker images with the same tags will kick off.
>>>>>>> template/master
