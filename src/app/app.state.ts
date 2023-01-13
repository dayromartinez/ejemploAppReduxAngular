import { ActionReducerMap } from "@ngrx/store";
import { ToDo } from "./todos/models/todo.model";
import { filtrosPosibles } from './filtro/filtro.actions';
import { toDoReducer } from "./todos/todo.reducer";
import { filtroReducer } from './filtro/filtro.reducer';

export interface AppState {
  toDos: ToDo[],
  filtro: string
}


export const appReducers: ActionReducerMap<AppState> = {
  toDos: toDoReducer,
  filtro: filtroReducer
}
