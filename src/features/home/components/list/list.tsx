import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Cocktail } from "../../../../models/cocktail";
import ListItem from "../list-item/listItem";
import "./list.css";

export interface IProps {
  cocktailList: Cocktail[];
//   handleDelete: (university: Cocktail) => void;
  handleDetail: (cocktail: Cocktail) => void;
}

const List: FC<IProps> = ({ cocktailList, handleDetail }) => {
//   const listItemDelete = (cocktail: Cocktail) => {
//     handleDelete(cocktail);
//   };

  const cardDetail = (cocktail: Cocktail) => {
    handleDetail(cocktail);
  };

  return (
    <>
      <div className="cocktail-list">
        {cocktailList.map((item: Cocktail, index: any) => (
          <ListItem
            key={index}
            item={item}
            handleDetail={cardDetail}
          />
        ))}
      </div>
    </>
  );
};

export default List;
