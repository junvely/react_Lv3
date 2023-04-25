import React, { useState } from "react";
import { StFlexCon, StSection, StTitle, colors } from "../styles/them";
import Input from "./Input";
import Button from "./Button";

function InputSec({ children }) {
  const initialState = {
    name: "",
    price: "0",
  };

  const [product, setProduct] = useState(initialState);

  // input 입력값 전달 받아 콤마(,) 찍기
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setProduct({ ...product, [name]: value });
    } else if (name === "price") {
      // 입력 시마다 이전 comma지우고 다시 찍기
      const deleteComma = parseInt(value.replace(/,/g, ""));
      const reAddComma = deleteComma.toLocaleString();
      setProduct({
        ...product,
        price: reAddComma,
      });
    }
  };

  const handleClickButton = () => {
    alert(`{name : ${product.name}, price : ${product.price}}`);
  };

  return (
    <StSection>
      <StTitle>{children}</StTitle>
      <StFlexCon>
        <Input
          type="text"
          value={product.name}
          name="name"
          onChange={handleChangeInput}
        >
          이름
        </Input>
        <Input
          type="text"
          value={product.price}
          name="price"
          onChange={handleChangeInput}
        >
          가격
        </Input>
        <Button
          name="저장"
          bgColor={colors.lightGreen}
          onClick={handleClickButton}
        ></Button>
      </StFlexCon>
    </StSection>
  );
}

export default InputSec;
