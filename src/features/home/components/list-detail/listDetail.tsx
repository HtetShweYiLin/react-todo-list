import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HeaderBar } from "../header-bar/header-bar";
import "./list-detail.css";
const ListDetail = () => {
  const { name } = useParams();
  const cocktail = useSelector((state: any) => state.home.cocktailDetail);

  return (
    <>
      <HeaderBar />
      <div className="card-details">
        <div>
          <div className="thumbnail-wrapper">
            <img className="thumbnail" src={cocktail.drinkThumbnail} />
          </div>
          <div className="h4-strong text-c300 detail-text">{cocktail.drinkName}</div>
        </div>
      </div>
    </>
  );
};

export default ListDetail;
