import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Pagination from "../Pagination";

test("Testing pagination", () => {
  render(<Pagination totalpost={6} postperpage={3} handleclick={() => null} />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(2);
});
