import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUniversityListQuery } from "../../api/university/universityApi";
import { Cocktail } from "../../models/cocktail";
import { getDetailCocktail } from "./homeSclice";
const Home: FC = () => {
  const { data, error, isLoading } = useGetUniversityListQuery({
    country: "Turkey",
  });
  const navigate = useNavigate();

  const cocktailList = useSelector((state: any) => state.home.universityList);
  const dispatch = useDispatch();
//   const handleDelete = (university: University) => {
//     dispatch(deleteUniversity(university));
//   };

  const handleDetail = (cocktail: Cocktail) => {
    dispatch(getDetailCocktail(cocktail.drinkId));
    navigate(`/detail/${cocktail.drinkId}`);
  };

  return (
    <>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <div>
            {cocktailList.map((item: Cocktail, index: any) => (
                <div>{ item.drinkName }</div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;