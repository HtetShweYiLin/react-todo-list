import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Cocktail } from "../../../../models/cocktail";
import ListItem from "../list-item/listItem";

export interface IProps {
  cocktailList: Cocktail[];
//   handleDelete: (university: Cocktail) => void;
  handleDetail: (university: Cocktail) => void;
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
      <h1>Count : {cocktailList.length}</h1>
      {cocktailList.map((item: Cocktail, index: any) => (
        <ListItem
          key={index}
          item={item}
          handleDetail={cardDetail}
        />
      ))}
    </>
  );
};

export default List;
