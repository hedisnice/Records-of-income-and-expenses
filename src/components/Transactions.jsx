/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Item from "./Item";

import DataContext from "../data/DataContext";
import { useContext } from "react";

const Transactions = (props) => {
  const { items } = props;

  return (
    <div>
      <ul className="item-list">
        {items.map((e) => {
          return <Item key={e.id} {...e} />;
        })}
      </ul>
    </div>
  );
};
export default Transactions;
