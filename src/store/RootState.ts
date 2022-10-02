import { KanyeRestState } from "../features/KanyeRest/state/KanyeRestState";
import { CounterState } from "../features/counter/state/CounterState";
import { todoActions } from "../features/todo/state/todo-action";

export type RootState = {
  kanyeRest: KanyeRestState;
  counter: CounterState;
};