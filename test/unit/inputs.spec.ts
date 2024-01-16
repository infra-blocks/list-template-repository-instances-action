import { expect, resetEnvFixture } from "@infra-blocks/test";
import { parseInputs } from "../../src/inputs.js";

describe("inputs", function () {
  describe(parseInputs.name, function () {
    describe("template-repository", function () {
      const gitHubPat = "123456789";

      afterEach("reset env", resetEnvFixture());

      it("should work for a string", function () {
        expect(
          parseInputs({
            "template-repository": "big-org/small-repo",
            "github-pat": gitHubPat,
          }),
        ).to.deep.equal({
          templateRepository: "big-org/small-repo",
          gitHubPat,
        });
      });
      it("should default to the context repository", function () {
        process.env.GITHUB_REPOSITORY = "small-org/big-repo";
        expect(
          parseInputs({
            "github-pat": gitHubPat,
          }),
        ).to.deep.equal({
          templateRepository: "small-org/big-repo",
          gitHubPat,
        });
      });
      it("should throw when it cannot find the repository from the context", function () {
        expect(() =>
          parseInputs({
            "github-pat": gitHubPat,
          }),
        ).to.throw();
      });
    });
    describe("github-token", function () {
      const templateRepository = "organization/template-repo";

      it("should work with valid string", function () {
        expect(
          parseInputs({
            "github-pat": "shhhhsecretssss",
            "template-repository": templateRepository,
          }),
        ).to.deep.equal({
          gitHubPat: "shhhhsecretssss",
          templateRepository,
        });
      });
      it("should throw when undefined", function () {
        expect(() =>
          parseInputs({
            "template-repository": templateRepository,
          }),
        ).to.throw();
      });
    });
  });
});
