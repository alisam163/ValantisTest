import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { next, prev } from "./../../redux/slices/pageSlice";
import { increment, decrement } from "./../../redux/slices/offsetSlice";
import Nav from "react-bootstrap/Nav";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Pagination = () => {
  const page = useSelector((state) => state.page.value);
  const dispatch = useDispatch();
  const offset = useSelector((state) => state.offset.value);

  const nextPage = () => {
    dispatch(next());
    dispatch(increment());
  };

  const prevPage = () => {
    dispatch(prev());
    dispatch(decrement());
  };
  return (
    <Nav className="justify-content-center" activeKey="/home">
      {page > 1 ? (
        <Nav.Item>
          <Nav.Link href="" onClick={() => prevPage()}>
            <FaAngleLeft />
          </Nav.Link>
        </Nav.Item>
      ) : undefined}
      <Nav.Item>
        <Nav.Link eventKey="">{page}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="" onClick={() => nextPage()}>
          <FaAngleRight />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Pagination;
