import Item from "./Item";
import { Table } from "react-bootstrap";

const Items = ({ items }) => {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        {items.map((item) => {
          return <Item item={item} />;
        })}
      </Table>
    </div>
  );
};

export default Items;
