import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setText } from "../../redux/slices/filterSlice";

const Input = () => {
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = () => {
    dispatch(setText(value));
    setValue("");
  };

  const onKeyEnter = (e) => {
    if (e.code === "Enter") {
      onSearch();
    }
  };

  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">
        <FaPen />
      </InputGroup.Text>
      <Form.Control
        value={value}
        onChange={(e) => handleChange(e)}
        onKeyUp={(e) => onKeyEnter(e)}
      />
      <Button size="sm" onClick={() => onSearch()}>
        П<IoSearch />
        иск
      </Button>
    </InputGroup>
  );
};

export default Input;
