import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './todo-slice'
import { counterSlice } from '../features/counter/state/counterSlice';

const store=configureStore(
    {
        reducer:{
            todo:todoSlice.reducer,
            counter: counterSlice.reducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch
export default store;