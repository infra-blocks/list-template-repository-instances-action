# list-template-repository-instances-action
[![Build](https://github.com/infra-blocks/list-template-repository-instances-action/actions/workflows/build.yml/badge.svg)](https://github.com/infra-blocks/list-template-repository-instances-action/actions/workflows/build.yml)
[![Release](https://github.com/infra-blocks/list-template-repository-instances-action/actions/workflows/release.yml/badge.svg)](https://github.com/infra-blocks/list-template-repository-instances-action/actions/workflows/release.yml)
[![Git Tag](https://github.com/infra-blocks/list-template-repository-instances-action/actions/workflows/git-tag.yml/badge.svg)](https://github.com/infra-blocks/list-template-repository-instances-action/actions/workflows/git-tag.yml)
[![Update From Template](https://github.com/infra-blocks/list-template-repository-instances-action/actions/workflows/update-from-template.yml/badge.svg)](https://github.com/infra-blocks/list-template-repository-instances-action/actions/workflows/update-from-template.yml)
[![codecov](https://codecov.io/gh/infra-blocks/list-template-repository-instances-action/graph/badge.svg?token=SUMSKEDJXV)](https://codecov.io/gh/infra-blocks/list-template-repository-instances-action)

This GitHub Action lists all the repositories that have been instantiated using the provided template repository
as input.

Given a template repository `org/template-repo`, this action will return all the repos under organization
`org` that have been created with the `org/template-repo` template.

The output is a JSON stringified list of all the responses of the [api calls](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository)
for repositories that have the "template_repository" field matching the provided input.

## Inputs

|        Name         | Required | Description                                                                                                |
|:-------------------:|:--------:|------------------------------------------------------------------------------------------------------------|
|     github-pat      |   true   | The GitHub token used to make API calls. Because the API calls are organization wide, they required a PAT. |
| template-repository |  false   | The template repository to list instances for. Defaults to ${{ github.repository }}                        |

## Outputs

|      Name       | Description                                                                                                                                                                                                                                                                  |
|:---------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    instances    | A stringified JSON array of repository objects for which the template repository is the one provided as input. The repository objects are the ones returned by the [get repository API](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#get-a-repository). |
| instances-count | The count of instances returned by the above.                                                                                                                                                                                                                                |

## Permissions

Tied to the PAT.

## Usage

```yaml
- uses: docker://public.ecr.aws/infra-blocks/list-template-repository-instances-action:v2
  with:
    github-pat: ${{ secrets.PAT }}
```
