import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Cocktail } from "../../models/cocktail";
import { getDetailCocktail } from "./homeSclice";
import List from "./components/list/list";
import { AppDispatch } from '../../store/store';
import { fetchCocktailList } from "../../api/cocktail/cocktailApi";

const Home: FC = () => {
  const navigate = useNavigate();

  // use AppDispatch instead of useDispatch
  const dispatch = useDispatch<AppDispatch>();

  const cocktailList = useSelector((state: any) => state.home.cocktailList);
  console.log("cocktailList",cocktailList);

  const handleDetail = (cocktail: Cocktail) => {
    console.log("handleDetail")
    dispatch(getDetailCocktail(cocktail.drinkId));
    navigate(`/cocktail/${cocktail.drinkId}`);
  };
  
  // useEffect for fetching data
  useEffect(() => {
    dispatch(fetchCocktailList());
  }, [dispatch]);

  return (
    <>
      <div>
        {cocktailList.error ? (
          <>Oh no, there was an error</>
        ) : cocktailList.loading === 'pending' ? (
          <>Loading...</>
        ) : cocktailList.data ? (
          <List cocktailList={cocktailList.data} handleDetail={handleDetail} />
        ) : null}
      </div>
    </>
  );
};

export default Home;