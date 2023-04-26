import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  StDropDown,
  StSelectButton,
  StSelectCon,
} from "../styles/Select.styles";

function Select({ position }) {
  const subjects = ["리액트", "자바", "스프링", "리액트네이티브"];
  const [selectToggle, setSelectToggle] = useState(false);
  const [selected, setSelected] = useState("리액트");

  const toggleChange = () => {
    setSelectToggle(!selectToggle);
  };

  return (
    <StSelectCon>
      <StSelectButton onClick={toggleChange}>
        <p>{selected}</p>
        <IoIosArrowDown></IoIosArrowDown>
      </StSelectButton>
      <StDropDown position={position}>
        {selectToggle && (
          <ul>
            {subjects.map((data) => {
              return <li onClick={() => setSelected(data)}>{data}</li>;
            })}
          </ul>
        )}
      </StDropDown>
    </StSelectCon>
  );
}

export default Select;
