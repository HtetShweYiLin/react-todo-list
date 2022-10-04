import { createSlice } from "@reduxjs/toolkit";
import { cocktailApi } from "../../api";
import { Cocktail } from "../../models/cocktail";

const cocktailList: Cocktail[] = [];
const cocktailDetail: Cocktail = {
    drinkId: "",
    drinkName: "",
    drinkThumbnail: ""
};

const initialState = {
  cocktailList: cocktailList,
  cocktailDetail: cocktailDetail,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getDetailCocktail: (state, action) => {
      state.cocktailList.map((cocktail) => {
        if (cocktail.drinkId === action.payload) {
          state.cocktailDetail = cocktail;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cocktailApi.endpoints.getCocktailList.matchFulfilled,
      (state, action) => {
        state.cocktailList = action.payload;
      }
    );
  },
});

export const { getDetailCocktail } = homeSlice.actions;

export default homeSlice.reducer;