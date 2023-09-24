import React, { useState } from "react";
import './style/MealDBStyle.css'

const AccordionWithUseEffect = (props) => {

  const classnames = ["accordion"];

  if (props.value === props.active) {
    classnames.push("active");
  }

  const onClick = () => {
    props.onClick(props.value);
  };

  return (
    <div onClick={onClick} className={classnames.join(" ")}>
      <button onClick={onClick} className="accordion__button">
        {props.title}
      </button>
      <div className="accordion__content">{props.children}</div>
    </div>
  );
};

export default AccordionWithUseEffect;
