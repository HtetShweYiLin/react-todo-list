import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cocktail } from "../../models/cocktail";

export const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getCocktailList: builder.query({
      query: (country) => ({
        url: `filter.php?c=Cocktail`
      }),

      transformResponse: (response: any) => {
        let cocktailArray: Cocktail[] = [];
        console.log("response",response.drinks);
        let res = response.drinks;
        res.map((cocktail: any) => {
          let cocktailObj: Cocktail = {
            drinkId: cocktail.idDrink,
            drinkName: cocktail.strDrink,
            drinkThumbnail: cocktail.strDrinkThumb
          };
          cocktailArray.push(cocktailObj);
        });
        console.log("cocktailArray",cocktailArray)
        return cocktailArray;
      },
    }),
  }),
});

export const { useGetCocktailListQuery } = cocktailApi;
