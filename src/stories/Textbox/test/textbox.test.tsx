import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Textbox from "../Textbox";
import { useState } from "react";
describe("Testing input", () => {
  test("should first", () => {
    render(<Textbox handletextChange={(e) => {}} />);
    let input = screen.getByPlaceholderText("search") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "24/05/2021" } });
    expect(input.value).toBe("24/05/2021");
  });
  //   expect(input.value);
});
