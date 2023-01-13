import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { filtrosPosibles } from '../../filtro/filtro.actions';
import * as acciones from '../../filtro/filtro.actions';
import * as accionesToDo from '../todo.actions';
import { eliminarToDosCompletadas } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: string = 'Todos';
  filtros: filtrosPosibles[] = ['Todos', 'Completados', 'Pendientes'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe( filtro => {
    //   console.log(filtro);
    //   this.filtroActual = filtro;
    // })

    //De esta forma se escuchan los cambios en el estado del store
    this.store.subscribe(estado => {
      this.filtroActual = estado.filtro;
      this.pendientes = estado.toDos.filter(toDo => !toDo.completado ).length;
    })
  }

  cambiarFiltro(filtro: string) {
    console.log(filtro);
    this.store.dispatch(acciones.cambiarFiltro({ filtro })) ;
  }

  borrarToDosCompletadas() {
    this.store.dispatch(accionesToDo.eliminarToDosCompletadas())
  }

}
