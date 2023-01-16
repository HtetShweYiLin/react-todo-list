import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Cocktail } from "../../models/cocktail";

// create async thunk for fetching cocktail list from API url https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
export const fetchCocktailList = createAsyncThunk('cocktailList/fetchCocktailList', async () => {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    let cocktailArray: Cocktail[] = [];
    let res = response.data.drinks;
    res.map((cocktail: any) => {
        let cocktailObj: Cocktail = {
            drinkId: cocktail.idDrink,
            drinkName: cocktail.strDrink,
            drinkThumbnail: cocktail.strDrinkThumb
        };
        cocktailArray.push(cocktailObj);
    }); 
    return cocktailArray;   
});