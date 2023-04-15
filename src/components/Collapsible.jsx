import React from "react";
import Arrow from "../assets/ARROW.svg";

function Collapsible(props) {
  //useState hook to control the visibility of the content
  const [open, setOpen] = React.useState(false);

  //To toggle the open state of the component when function called
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <button onClick={handleOpen} className="open-btn">
        <p className="collapse-title">
          {props.icon}
          {props.title}
        </p>
        <img
          src={Arrow}
          alt="arrow"
          className={open ? "open-arrow" : "closed-arrow"}
        />
      </button>
      <div className={open ? "collapse-content" : "hidden-content"}>
        {props.content}
      </div>
    </div>
  );
}

export default Collapsible;
