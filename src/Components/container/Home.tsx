import React, { useContext, useEffect, useState } from "react";
import { Datacontextcreator } from "../../Context/DataContext";
import Card from "../card/Card";
import Cardmodal from "./Cardmodal";
import Pagination from "../pagination/Pagination";
import qs from "qs";
import {
  RootObject,
  Datacontextcreatorinterface,
} from "../../types/typeinterface";
import { Hometype } from "./types/containertypes";
import {
  Deleteapi,
  fetchapibyid,
  fetchapibyquery,
  patchapi,
} from "../../utils/hook/useFetchhook";

function Home({ data, handleclick }: Hometype) {
  const contextData =
    useContext<Datacontextcreatorinterface | null>(Datacontextcreator);
  if (!contextData) return null;
  const { setform, setfirstdatafromapi, firstdatafromapi } = contextData;
  const [click, setclick] = useState<number>(0);
  const [modal, setmodal] = useState(false);
  const [modalval, setmodalval] = useState<RootObject | null>(null);
  const [input, setinput] = useState("");
  const query = qs.stringify({ title: input.trim() });

  //fetch test case can be resolved by using axios

  async function fetchedCompleteData() {
    let value = await fetchapibyquery(query);
    setfirstdatafromapi(value?.data);
    console.log(data);
  }

  useEffect(() => {
    fetchedCompleteData();
  }, [input]);

  function handleModal(e: RootObject) {
    setmodal((prev) => !prev);
    setmodalval(e);
  }

  function close() {
    setmodal(false);
  }

  function handleEdit(id: string) {
    patchapi(modalval!, id);
    setTimeout(() => {
      setform({});
    }, 2000);
  }

  function handleDelete(id: string) {
    Deleteapi(id);
    setTimeout(() => {
      setform({ title: "" });
    }, 2000);
  }

  function handleChange(
    changedatafrominput:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) {
    setmodalval({
      ...modalval!,
      [changedatafrominput.target.name]: changedatafrominput.target.value,
    });
  }
  const val = data.map((e: RootObject, i: number) => {
    return (
      <div key={e._id} className="disabled:bg-slate-500">
        {/* <NavLink to={`store/${e._id}`}> */}
        <Card
          value={e}
          click={click}
          setclick={setclick}
          handleDelete={(id: string) => handleDelete(id)}
          handleModal={handleModal}
          // handleClick={handleClick}
          id={i}
        />
        {/* </NavLink> */}
      </div>
    );
  });

  return (
    <div className="relative">
      <input
        className="w-full p-5"
        value={input}
        onChange={(e) => setinput(e.target.value)}
        placeholder="searchinput"
      />
      {/* <ParentCard /> */}
      <section className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 sm:grid-cols-2   ">
        {val}
      </section>
      {/* <Parent /> */}
      <Pagination
        totalpost={firstdatafromapi!?.length}
        handleclick={handleclick}
        postperpage={3}
      />
      <Cardmodal
        modalval={modalval!}
        show={modal}
        handleChange={handleChange}
        handleedit={(id: string) => handleEdit(id)}
        close={close}
      />
    </div>
  );
}

export default Home;
