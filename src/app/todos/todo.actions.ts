import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea ToDo',
  props<{texto: string}>(),
);

export const completado = createAction(
  '[TODO] Completar ToDo',
  props<{id: number}>(),
);

export const editar = createAction(
  '[TODO] Editar ToDo',
  props<{id: number, texto: string}>(),
);

export const eliminar = createAction(
  '[TODO] Eliminar ToDo',
  props<{id: number}>(),
);

export const cambiarToDos = createAction(
  '[TODO] Cambiar todas las ToDos',
  props<{completado: boolean}>(),
);

export const eliminarToDosCompletadas = createAction('[TODO] Eliminar toDos completadas');
