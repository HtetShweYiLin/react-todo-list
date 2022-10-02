import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../features/todo/state/todo-slice';
import { kanyeRestSlice } from '../features/KanyeRest/state/kanyeRestSlice';
import { counterSlice } from '../features/counter/state/counterSlice';

const store=configureStore(
    {
        reducer:{
            todo:todoSlice.reducer,
            kanyeRest: kanyeRestSlice.reducer,
            counter: counterSlice.reducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store;