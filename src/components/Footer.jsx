import React from "react";

function Footer() {
  return (
    <>
      <main className="flex flex-row justify-around py-8 border-t-2 border-black font-gotham text-white bg-slate-600">
        <div className="flex justify-center text-2xl md:text-5xl">
          Fazztrack
        </div>
        <div className="font-bold">
          <div>This Project created on :</div>
          <div>27 February 2023</div>
        </div>
      </main>
    </>
  );
}

export default Footer;
