import { describe, expect, it } from "vitest";
import { Bar } from "./bar.mjs";

describe("Bar", () => {
  it("should be bar", () => {
    expect(Bar).toEqual("bar");
  });
});
