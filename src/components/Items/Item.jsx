import React from "react";

const Item = ({ item }) => {
  return (
    <tbody>
      <tr>
        <td>{item.id}</td>
        <td>{item?.brand}</td>
        <td>{item.product}</td>
        <td>{item.price}</td>
      </tr>
    </tbody>
  );
};

export default Item;
