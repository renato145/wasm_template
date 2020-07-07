import React, { useRef } from "react";
import { greet } from "wasm-example";

export const Example = () => {
  const ref = useRef();

  const handleClick = () => {
    greet(ref.current.value);
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-100 font-semibold">Example component</p>
      <div className="flex flex-row mt-6 items-baseline">
        <p className="text-gray-100">Alert text:</p>
        <input
          className="ml-3 h-6 focus:outline-none"
          placeholder="enter text..."
          type="text"
          ref={ref}
        />
        <button className="ml-3 text-sm w-24" onClick={handleClick}>
          Wasm alert!
        </button>
      </div>
    </div>
  );
};
