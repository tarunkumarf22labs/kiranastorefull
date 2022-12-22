import { RootObject } from "../../types/typeinterface";
let actualapi: string =
  "https://kiranastore-upload-backend-f22labs.onrender.com/products/";

export async function fetchapi() {
  try {
    const response = await fetch(actualapi);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchapibyid(id: string) {
  try {
    const response = await fetch(`${actualapi}${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchapibyquery(query: string) {
  try {
    const response = await fetch(
      `https://kiranastore-upload-backend-f22labs.onrender.com/products?${query}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export function patchapi(modalval: RootObject, id: string) {
  fetch(`${actualapi}${id}`, {
    method: "PATCH",
    body: JSON.stringify(modalval),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((e) => {
    console.log(e);
  });
}

export function Deleteapi(id: string) {
  fetch(`${actualapi}${id}`, {
    method: "DELETE",
  }).then((e) => {
    console.log(e);
  });
}
