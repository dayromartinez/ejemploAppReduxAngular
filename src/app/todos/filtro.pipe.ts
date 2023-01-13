import { Pipe, PipeTransform } from '@angular/core';
import { filtrosPosibles } from '../filtro/filtro.actions';
import { ToDo } from './models/todo.model';

@Pipe({
  name: 'filtroToDo'
})
export class FiltroPipe implements PipeTransform {

  transform(toDos: ToDo[], filtro: string): ToDo[] {
    switch (filtro) {
      case 'Completados':
        return toDos.filter(toDo => toDo.completado);
      case 'Pendientes':
        return toDos.filter(toDo => !toDo.completado);
      default:
        return toDos;
    }
  }

}
