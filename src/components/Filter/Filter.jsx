import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import {
  setFilter,
  resetFilter,
  onSelect,
  offSelect,
} from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input";
import InputPrice from "../Input/InputPrice";
import FilterBrand from "./FilterBrand";

const Filter = () => {
  const inSelect = useSelector((state) => state.filter.inSelect);
  const filterBy = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  const onSelectFilter = (e) => {
    dispatch(onSelect(true));
    dispatch(setFilter(e.target.value));
    console.log(filterBy);
  };

  const resetSelectFilter = () => {
    dispatch(offSelect(false));
    dispatch(resetFilter());
  };
  return (
    <div>
      <div>
        <ButtonGroup className="mb-2">
          <Button size="sm" value="product" onClick={onSelectFilter}>
            Название
          </Button>
          <Button size="sm" value="brand" onClick={onSelectFilter}>
            Бренд
          </Button>
          <Button size="sm" value="price" onClick={onSelectFilter}>
            Цена
          </Button>
          {inSelect ? (
            <Button
              variant="danger"
              size="sm"
              value="reset"
              onClick={resetSelectFilter}
            >
              Сбросить фильтр
            </Button>
          ) : undefined}
        </ButtonGroup>
      </div>
      <div>
        {filterBy === ("product" || inSelect) ? <Input /> : undefined}
        {filterBy === ("brand" || inSelect) ? <FilterBrand /> : undefined}
      </div>
      {filterBy === ("price" || inSelect) ? <InputPrice /> : undefined}
    </div>
  );
};

export default Filter;
