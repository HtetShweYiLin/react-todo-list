import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./list-detail.css";
const ListDetail = () => {
  const { name } = useParams();
  const cocktail = useSelector((state: any) => state.home.cocktailDetail);

  return (
    <>
      <div className="card-details">
        <div>
          <img src={cocktail.drinkThumbnail} />
        </div>
        <div className="h4-strong text-c300">{cocktail.drinkName}</div>
      </div>
    </>
  );
};

export default ListDetail;
