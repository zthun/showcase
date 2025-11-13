import { describe, expect, it } from "vitest";
import { Foo } from "./foo.mjs";

describe("Foo", () => {
  it("should be foo", () => {
    expect(Foo).toEqual("foo");
  });
});
