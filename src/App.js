import React from "react";
import { Example } from "./components/Example";
import './index.css';

export const App = () => {
  return (
    <div className="mx-auto mt-6 p-5 md:w-1/2 rounded shadow bg-gray-700">
      <Example />
    </div>
  );
};
