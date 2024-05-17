# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.3] - 2024-04-09

### Changed

- The action image is now built using the `public.ecr.aws/infra-blocks/docker-typescript-action-base`
  base image.

## [2.0.2] - 2024-01-21

### Changed

- Bumped the `@infra-blocks/github-actions` dependency to `0.2.1`.

## [2.0.1] - 2024-01-16

### Added

- Minor documentation update about the permissions required by the action.

## [2.0.0] - 2024-01-16

### Changed

- The action has been updated to use the docker engine instead of Node.js. This means that the syntax to use
  it has changed to `docker://public.ecr.aws/infra-blocks/list-template-repository-instances-action:v2`.

## [1.1.0] - 2024-01-08

### Added

- The `instances-length` output, which is just the length of the array returned in the `instances` output.

## [1.0.0] - 2023-12-19

### Added

- First official version!
- Documented usage in README.md.

## [0.1.2] - 2023-12-19

### Fixed

- Bad spacing of input definition in `action.yml`.

## [0.1.1] - 2023-12-19

### Fixed

- Don't enforce being invoked from a push event. Don't enforce any events at all.

## [0.1.0] - 2023-12-14

### Added

- First release!

[2.0.3]: https://github.com/infra-blocks/list-template-repository-instances-action/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/infra-blocks/list-template-repository-instances-action/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/infra-blocks/list-template-repository-instances-action/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/infra-blocks/list-template-repository-instances-action/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/infra-blocks/list-template-repository-instances-action/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/infra-blocks/list-template-repository-instances-action/compare/v0.1.2...v1.0.0
[0.1.2]: https://github.com/infra-blocks/list-template-repository-instances-action/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/infra-blocks/list-template-repository-instances-action/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/infra-blocks/list-template-repository-instances-action/releases/tag/v0.1.0
