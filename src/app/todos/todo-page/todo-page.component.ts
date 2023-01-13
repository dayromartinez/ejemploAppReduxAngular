import { Component, OnInit } from '@angular/core';
import { completado } from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as acciones from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  cambiarTodos() {
    this.completado = !this.completado;
    this.store.dispatch(acciones.cambiarToDos({ completado: this.completado }));
  }

}
