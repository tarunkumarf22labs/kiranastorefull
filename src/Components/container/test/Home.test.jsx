import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DataContext from "../../../Context/DataContext";
import Home from "../Home";
let data = [
  {
    category: {
      quality: "good",
    },
    _id: "639aad1d9512feab115031c6",
    title: "dalsss",
    price: 729,
    description:
      "BB Royal Sona Masoori Raw Rice/Akki, 25 kg (12 - 17 Months Old)\n\nRoshan ",
    img: "https://www.bigbasket.com/media/uploads/p/l/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
    userId: "4",
    __v: 0,
  },
  {
    category: {
      quality: "good",
    },
    _id: "639aad1d9512feab115031c7",
    title: "dlsss",
    price: 729,
    description:
      "BB Royal Sona Masoori Raw Rice/Akki, 25 kg (12 - 17 Months Old)\n\nRoshan ",
    img: "https://www.bigbasket.com/media/uploads/p/l/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
    userId: "4",
    __v: 0,
  },
  {
    category: {
      quality: "good",
    },
    _id: "639aad1d9512feab115031c8",
    title: "alsss",
    price: 729,
    description:
      "BB Royal Sona Masoori Raw Rice/Akki, 25 kg (12 - 17 Months Old)\n\nRoshan ",
    img: "https://www.bigbasket.com/media/uploads/p/l/40042841_7-bb-royal-toor-dalarhar-dal-desi.jpg",
    userId: "4",
    __v: 0,
  },
];

describe("TEST for Home component ", () => {
  beforeEach(() => {
    render(
      <DataContext>
        <Router>
          <Home data={data} />
        </Router>
      </DataContext>
    );
  });

  test("getting 3 result from api  ", () => {
    expect(screen.getAllByRole("article").length).toBe(3);
  });

  test("Handling edit functionality ", async () => {
    const clickbutton = await screen.getAllByText("click");
    fireEvent.click(clickbutton[1]);
    let userclick = await screen.getByText("Edit");
    fireEvent.click(userclick);
    let textinput = screen.getByPlaceholderText("title");
    fireEvent.change(textinput, { target: { value: "24/05/2021" } });
    expect(textinput.value).toBe("24/05/2021");
    let editbuttonformmodal = await screen.getByText(/edit value/i);
    fireEvent.click(editbuttonformmodal);
    // fetch issue
  });

  test("Handling Delete functionality", async () => {
    const clickbutton = await screen.getAllByText("click");
    fireEvent.click(clickbutton[1]);
    let userclick = await screen.getByText("Delete");
    fireEvent.click(userclick);
  });
});
