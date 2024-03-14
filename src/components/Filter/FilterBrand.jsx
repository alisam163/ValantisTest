import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { setText } from "../../redux/slices/filterSlice";

const FilterBrand = () => {
  const arrBrand = useSelector((state) => state.filter.arrBrand);
  const dispatch = useDispatch();

  const handlerOnClick = (e) => {
    dispatch(setText([e.target.value]));
  };

  return (
    <div key={uuidv4()}>
      {arrBrand.map((item) => {
        return (
          <Button
            variant="success"
            size="sm"
            className="m-1"
            value={item}
            onClick={(e) => handlerOnClick(e)}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default FilterBrand;
