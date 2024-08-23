import React from "react";
import { GetStartedProps } from "./types";

const GetStarted = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Get Started
  </button>
);

GetStarted.propTypes = GetStartedProps;

export default GetStarted;
