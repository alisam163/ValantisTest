import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaRubleSign } from "react-icons/fa6";

const InputPrice = () => {
  const [fromPrice, setFromPrice] = useState();
  const [toPrice, setToPrice] = useState();

  const handlerFromChange = (e) => {
    console.log(e);
    setFromPrice(e.target.value);
  };

  const handlerToChange = (e) => {
    console.log(e);
    setToPrice(e.target.value);
  };
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <FaRubleSign />
        </InputGroup.Text>
        <InputGroup.Text>От</InputGroup.Text>
        <Form.Control
          value={fromPrice}
          onChange={(e) => handlerFromChange(e)}
        />
      </InputGroup>
      <InputGroup>
        <Form.Control value={toPrice} onChange={(e) => handlerToChange(e)} />
        <InputGroup.Text>
          <FaRubleSign />
        </InputGroup.Text>
        <InputGroup.Text>До</InputGroup.Text>
      </InputGroup>
    </>
  );
};

export default InputPrice;
