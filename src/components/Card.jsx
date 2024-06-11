import React from "react";

export default function Card({ index, title, body, img }) {
  const isEven = index % 2 === 0;
  console.log(index);

  return (
    <div className="grid m-10 shadow-lg border-slate-300 px-3 py-12 rounded-lg items-center text-center gap-8 md:grid-cols-2 md:py-2 md:h-min">
      <div
        className={`${
          isEven ? "md:col-start-2" : "md:col-start-1"
        } row-start-1`}
      >
        <img
          className="w-7/12 m-auto"
          src={`../../images/${img}.svg`}
          alt={title}
        />
      </div>
      <div
        className={`grid grid-rows-3 text-center px-8 pb-9 text-center ${
          isEven ? "md:col-start-1 " : "md:col-start-2"
        } row-start-2 md:row-start-1 md:text-start md:mx-10`}
      >
        <h2 className="row-start-1 font-bold poppins-semibold">{title}</h2>
        <p className="row-start-2 row-span-2 open-sans-font">{body}</p>
      </div>
    </div>
  );
}
