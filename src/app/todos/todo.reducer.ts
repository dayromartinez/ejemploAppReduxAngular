import { Action, createReducer, on } from '@ngrx/store';
import { ToDo } from './models/todo.model';
import { crear, completado, editar, eliminar, cambiarToDos, eliminarToDosCompletadas } from './todo.actions';

export const estadoInicial: ToDo[] = [
  new ToDo('Terminar de corregir 9 de septiembre'),
  new ToDo('Terminar de leer Pedro Páramo'),
  new ToDo('Terminar de leer Temporada de huracanes'),
  new ToDo('Realizar postulación al taller distrital de crónica'),
  new ToDo('Terminar de ver Pedro el escamoso')
];

export const _toDoReducer = createReducer(
  estadoInicial,
  on(crear, (estado, { texto }) => [...estado, new ToDo(texto)]),
  on(cambiarToDos, (estado, { completado }) => {
    return estado.map(toDo => {
      return {
        ...toDo,
        completado
      }
    })
  }),
  on(completado, (estado, { id }) => {
    return estado.map(toDo => {
      return toDo.id === id ?
      {
        ...toDo,
        completado: !toDo.completado
      } : toDo;
    })
  }),
  on(editar, (estado, { id, texto }) => {
    return estado.map(toDo => {
      return toDo.id === id ?
      {
        ...toDo,
        texto
      } : toDo;
    })
  }),
  on(eliminar, (estado, { id }) => {
    return estado.filter(toDo => toDo.id !== id)
  }),
  on(eliminarToDosCompletadas, (estado) => {
    return estado.filter(toDo => !toDo.completado)
  }),
);

export const toDoReducer = (estado: ToDo[] | undefined, accion: Action) => {
  return _toDoReducer(estado, accion);
}
