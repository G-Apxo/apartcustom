import React from "react";
import "./openPage.module.css";

const openPage = () => {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const container = document.querySelector(".container");

  left.addEventListener("mouseenter", () => container.classList.add("hover-left"));
  left.addEventListener("mouseleave", () => container.classList.remove("hover-left"));

  right.addEventListener("mouseenter", () => container.classList.add("hover-right"));
  right.addEventListener("mouseleave", () => container.classList.remove("hover-right"));
  return (
    <div className="stat">
      <div class="container">
        <div class="split left">
          <h1>Playstation 5</h1>
          <a href="#" class="btn">
            Buy Now
          </a>
        </div>
        <div class="split right">
          <h1>XBox Series X</h1>
          <a href="#" class="btn">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default openPage;
