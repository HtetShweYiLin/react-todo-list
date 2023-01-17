import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../../models/cocktail";
import { fetchCocktailList } from "../../api/cocktail/cocktailApi";

//interface for homeSlice
interface HomeState {
  cocktailList: {
    data: Cocktail[];
    loading: string | null;
    error: string | null;
  } 
  cocktailDetail: Cocktail;
}

//initial state for homeSlice
const initialState: HomeState = { 
  cocktailList: {
    data: [],
    loading: 'idle',
    error: null,  
  },           
  cocktailDetail: {
    drinkId: "",
    drinkName: "",
    drinkThumbnail: "",
  },  
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    // reducer for getDetailCocktail from cocktailList by drinkId
    getDetailCocktail: (state, action) => {
      state.cocktailDetail = state.cocktailList.data.find((cocktail) => cocktail.drinkId === action.payload) as Cocktail;
    }
  },
  extraReducers: (builder) => {
    // builder.addMatcher(
    //   cocktailApi.endpoints.getCocktailList.matchFulfilled,
    //   (state, action) => {
    //     state.cocktailList = action.payload;
    //   }
    // );
    // addCase for fetchCocktailList pending when fetching data when cocktailList loading is idle
    builder.addCase(fetchCocktailList.pending, (state, action) => {
      console.log("pending");
      if (state.cocktailList.loading === 'idle') {
        state.cocktailList.loading = 'pending';
      }
    } );

    // addCase for fetchCocktailList fulfilled when fetching data successfully
    builder.addCase(fetchCocktailList.fulfilled, (state, action) => {
      console.log("fulfilled");
      if (state.cocktailList.loading === 'pending') {
        state.cocktailList.loading = 'idle';
        state.cocktailList.data = action.payload;
      }
    });

    // addCase for fetchCocktailList rejected when fetching data failed
    builder.addCase(fetchCocktailList.rejected, (state, action) => {
      console.log("rejected");
      if (state.cocktailList.loading === 'pending') {
        state.cocktailList.loading = 'idle';
        state.cocktailList.error = 'Failed to fetch cocktail list';
      }
    } );
    
  },
});

export const { getDetailCocktail } = homeSlice.actions;

export default homeSlice.reducer;