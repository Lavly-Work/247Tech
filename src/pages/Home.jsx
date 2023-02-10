import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [appear, setAppear] = useState("Section 1");
  const [disabled, setDisabled] = useState("");
  const [tab1, setTab1] = useState(1);
  const [warn1, setWarn1] = useState(false);
  const [tableArray, setTableArray] = useState([]);
  const [small, setSmall] = useState(0);
  const generateArray = (numb) => {
    const array = [];
    for (let i = 1; i <= numb; i++) {
      array.push(Math.floor(Math.random() * (1000000 + 1000000 + 1) - 1000000));
    }
    setTableArray(array);
  };

  const smallerNumber = () => {
    let number = 0;
    for (let j = 1; j <= 1000000; j++) {
      if (tableArray.includes(j)) {
        number = j - 1;
        setSmall(number);
        return;
      }
    }
    for (let k = 0; k >= -1000000; k--) {
      if (tableArray.includes(k)) {
        number = 1;
        setSmall(number);
        return;
      }
    }
  };
  return (
    <>
      <Header />
      <main>
        <nav className="flex flex-row gap-4 p-5 ml-10">
          <button
            className={
              disabled === "Section 1"
                ? "list-none border-black border-2 px-6 py-2 rounded-2xl bg-slate-400"
                : "list-none border-black border-2 px-6 py-2 rounded-2xl active:bg-slate-300"
            }
            disabled={disabled === "Section 1"}
            onClick={() => setAppear("Section 1")}
          >
            Tab 1
          </button>
          <button
            className="list-none border-black border-2 px-6 py-2 rounded-2xl active:bg-slate-300"
            onClick={() => setAppear("Section 2")}
          >
            Tab 2
          </button>
          <button
            className="list-none border-black border-2 px-6 py-2 rounded-2xl active:bg-slate-300"
            disabled={false}
            onClick={() => setAppear("Section 3")}
          >
            Tab 3
          </button>
          <button
            className="list-none border-black border-2 px-6 py-2 rounded-2xl active:bg-slate-300"
            disabled={false}
            onClick={() => setAppear("Specification")}
          >
            Project Specification
          </button>
        </nav>
        <section
          className={
            appear === "Section 1"
              ? "min-h-3/4 flex flex-col items-center justify-center"
              : "hidden"
          }
        >
          <div>Input number between 1 - 10000</div>
          <input
            className="text-center py-2 my-3 border-2 border-black rounded-md"
            value={tab1}
            onChange={(e) => setTab1(e.target.value)}
          />
          <div className={warn1 ? "text-red-500" : "hidden"}>
            Input only number between 1 - 10000
          </div>
          <button
            className="list-none border-black border-2 px-4 py-2 rounded-2xl active:bg-slate-300"
            onClick={() => {
              if (tab1 < 1 || tab1 > 10000) {
                return setWarn1(true);
              }
              setWarn1(false);
              setAppear("Section 2");
              setDisabled("Section 1");
            }}
          >
            Submit
          </button>
        </section>
        <section className={appear === "Section 2" ? "min-h-3/4" : "hidden"}>
          <div className="flex justify-center">
            <button
              className="list-none border-black border-2 px-4 py-2 rounded-2xl m-3 active:bg-slate-300"
              onClick={() => generateArray(tab1)}
            >
              Generate Table
            </button>
          </div>
          <div className="flex flex-wrap w-1000 m-auto gap-1">
            {tableArray.map((item, idx) => {
              return <TableData item={item} key={idx} />;
            })}
          </div>
          <div className="text-center m-5">
            You can generate number multiple times, if you feel it is enough you
            can go to the next step by click submit button below.
          </div>
          <div className="flex justify-center">
            <button
              className="list-none border-black border-2 px-4 py-2 rounded-2xl active:bg-slate-300"
              onClick={() => {
                setAppear("Section 3");
              }}
            >
              Submit
            </button>
          </div>
        </section>
        <section className={appear === "Section 3" ? "min-h-3/4" : "hidden"}>
          <div className="text-center m-5">
            Generate smaller number than smallest number in the table
          </div>
          <div className="text-center m-5">{small}</div>
          <div className="flex flex-col justify-center items-center gap-4">
            <button
              className="list-none border-black border-2 px-4 py-2 rounded-2xl active:bg-slate-300"
              onClick={() => {
                smallerNumber();
                setAppear("Section 3");
              }}
            >
              Click Here!
            </button>
            <button
              className="list-none border-black border-2 px-6 py-2 rounded-2xl active:bg-slate-300"
              disabled={false}
              onClick={() => {
                setAppear("Section 1");
                setDisabled("");
              }}
            >
              Cancelation(Reset to Tab 1)
            </button>
          </div>
        </section>
        <section
          className={appear === "Specification" ? "min-h-3/4 p-10" : "hidden"}
        >
          <article>Project Specification</article>
          <div>This project was built with :</div>
          <li>
            React.js as Javascript library(including HTML inside javascript)
          </li>
          <li>Tailwind as UI CSS Framework</li>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;

const TableData = ({ item, idx }) => {
  return (
    <>
      <div className="border-2 border-black p-1 w-24 text-center" key={idx + 1}>
        {item}
      </div>
    </>
  );
};
