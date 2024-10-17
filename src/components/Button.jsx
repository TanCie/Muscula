import React from "react";

export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-amber-400 border-solid border-[2px] bg-slate-950 amberShadow duration-200 transition-all"
    >
      <p>{text}</p>
    </button>
  );
}
