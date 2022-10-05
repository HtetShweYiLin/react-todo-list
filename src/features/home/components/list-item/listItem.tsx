import React, { FC } from "react";
import { Cocktail } from "../../../../models/cocktail";
import "./list-item.css";

export interface IProps {
  item: Cocktail;
//   handleDelete: (cocktail: Cocktail) => void;
  handleDetail: (cocktail: Cocktail) => void;
}

const ListItem: FC<IProps> = ({ item, handleDetail }) => {
//   const onClickDelete = () => {
//     handleDelete(item);
//   };
  const onClickCard = () => {
    console.log("onClickCard",item)
    handleDetail(item);
  };
  return (
    <>
      <div className="card">
        <div className="card-info" onClick={onClickCard}>
          <div>
            <img className="thumbnail-img" src={item.drinkThumbnail} />
          </div>
          <div className="h4-strong text-c300 card-body">
            {item.drinkName}
          </div>
        </div>
        {/* <div className="card-action">
          <button className="btn-delete" onClick={onClickDelete}>
            Delete
          </button>
        </div> */}
      </div>
    </>
  );
};

export default ListItem;
