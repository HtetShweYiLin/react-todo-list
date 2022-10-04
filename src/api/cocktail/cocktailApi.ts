import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cocktail } from "../../models/cocktail";

export const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail",
  }),
  endpoints: (builder) => ({
    getUniversityList: builder.query({
      query: (country) => ({
        url: `search`,
        params: country,
      }),

      transformResponse: (response: Cocktail[]) => {
        let cocktailArray: Cocktail[] = [];
        response.map((cocktail: any) => {
          let cocktailObj: Cocktail = {
            drinkId: cocktail.idDrink,
            drinkName: cocktail.strDrink,
            drinkThumbnail: cocktail.strDrinkThumb
          };
          cocktailArray.push(cocktailObj);
        });
        return cocktailArray;
      },
    }),
  }),
});

export const { useGetCocktailListQuery } = cocktailApi;
