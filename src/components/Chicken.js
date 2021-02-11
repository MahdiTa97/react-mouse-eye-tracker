import React from "react";
import "../css/chicken.css";

export const Chicken = (props) => {
  return (
    <div class={`chicken ${props.className ?? ""}`}>
      <div class="head">
        <div class="crown">
          <div class="crown-p crown-p-one"></div>
          <div class="crown-p crown-p-two"></div>
          <div class="crown-p crown-p-three"></div>
        </div>
        <div class="eye eye-left">
          <div class="eye-inner"></div>
        </div>
        <div class="eye eye-right">
          <div class="eye-inner"></div>
        </div>
        <div class="nose"></div>
      </div>
      <div class="body">
        <div class="hand hand-left"></div>
        <div class="hand hand-right"></div>
      </div>
      <div class="foot foot-left"></div>
      <div class="foot foot-right"></div>
    </div>
  );
};
