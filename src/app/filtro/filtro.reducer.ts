import { createReducer, on, Action } from '@ngrx/store';
import { cambiarFiltro, filtrosPosibles } from './filtro.actions';

export const estadoInicialFiltros: string = 'Todos';

const _filtroReducer = createReducer(estadoInicialFiltros,
  on(cambiarFiltro, (estadoInicialFiltros, { filtro }) => filtro)
);

export function filtroReducer(estado: string | undefined, accion: Action) {
  return _filtroReducer(estado, accion);
}
