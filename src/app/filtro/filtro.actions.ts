import { createAction, props } from '@ngrx/store';

export type filtrosPosibles = 'Todos' | 'Completados' | 'Pendientes';

export const cambiarFiltro = createAction(
  '[Filtro] Cambiar filtro',
  props<{ filtro: string}>()
);
