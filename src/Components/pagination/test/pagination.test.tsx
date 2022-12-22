import Pagination from "../Pagination";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
describe("pagination", () => {
  test("pagination no of buttons", () => {
    render(<Pagination totalpost={6} postperpage={3} handleclick={function (page: number): void {
      throw new Error("Function not implemented.");
    } } />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
  });
});
