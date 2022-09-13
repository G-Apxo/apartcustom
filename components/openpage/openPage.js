import { useRef } from "react";
import "./openPage.module.scss";

const OpenPage = () => {
  const continerRef = useRef(null);
  // const left = document.querySelector(".left");
  // const right = document.querySelector(".right");
  // const container = document.querySelector(".container");

  // left.addEventListener("mouseenter", () => container.classList.add("hover-left"));
  // left.addEventListener("mouseleave", () => container.classList.remove("hover-left"));

  // right.addEventListener("mouseenter", () => container.classList.add("hover-right"));
  // right.addEventListener("mouseleave", () => container.classList.remove("hover-right"));

  console.log(continerRef.current);
  return (
    <div className="start">
      <div className="container" ref={continerRef}>
        {/* <div onMouseEnter={continerRef.current.classList.add("hover-right")} className="split left"> */}
          <a href="#" className="btn">
            <h1>Apart during day</h1>
          </a>
        </div>
        <div className="split right">
          <a href="#" className="btn">
            <h1>Apart at night</h1>
          </a>
        </div>
      </div>
    // </div>
  );
};
export default OpenPage;
