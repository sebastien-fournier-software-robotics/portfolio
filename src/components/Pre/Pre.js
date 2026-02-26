import React, { memo } from "react";
import logo from "../../assets/logo.png";

const Pre = memo(function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      {load && (
        <img src={logo} alt="Loading..." className="preloader-logo" />
      )}
    </div>
  );
});

export default Pre;
