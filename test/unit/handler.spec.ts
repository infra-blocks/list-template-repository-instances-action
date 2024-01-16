<<<<<<< HEAD
import { createHandler } from "../../src/handler.js";
import { expect } from "@infra-blocks/test";

describe("handler", function () {
  describe(createHandler.name, function () {
    it("should create handler", function () {
      const handler = createHandler({
        config: {
          owner: "BigMe",
          gitHubToken: "BIG_SECRET",
          templateRepository: "BigMe/BigTemplate",
        },
      });
      expect(handler).to.not.be.null;
=======
import { handler } from "../../src/handler.js";
import { expect } from "@infra-blocks/test";

describe("handler", function () {
  describe(handler.name, function () {
    it("should return the right output", async function () {
      expect(await handler({ exampleInput: "stuff" })).to.deep.equal({
        "example-output": "BYE!",
      });
>>>>>>> template/master
    });
  });
});
