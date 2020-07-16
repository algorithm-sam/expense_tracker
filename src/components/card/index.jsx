import React from "react";
import "./Card.scss";

// It has a predefined number of options it can take in;
// then you will now override them based off of your needs;

const Card = (props) => {
  // const something = () => {
  //   let className = "";
  //   className += { ...props.value };
  //   return className;
  // };

  // for (let i = 0; i < props.length; i++) {
  //   console.log(props[i]);
  // }

  return (
    <div>
      {/* <p>This is the card container</p>
      <p>32000</p>
      <p>23-06-2020</p>
      <p>23-06-2020</p>
      <p>Miscellaneous</p>
      <p className="controls">
        <svg
          width="6"
          height="22"
          viewBox="0 0 6 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="2" cy="2.66667" rx="2" ry="2" fill="#C4C4C4" />
          <ellipse cx="2" cy="10.6667" rx="2" ry="2" fill="#C4C4C4" />
          <ellipse cx="2" cy="19.3333" rx="2" ry="2" fill="#C4C4C4" />
        </svg>
      </p> */}

      {props.children}
    </div>
  );
};

Card.defaultProps = {
  flex: true,
  flexCol: true,
  shadow: true,
  radius: "sm",
  width: 500,
  height: 700,
  justify: "center",
  align: "center",
};
export default Card;
