import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  toDos: ToDo[] = [];
  filtroActual: string = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('toDos').subscribe(toDos => this.toDos = toDos);
    this.store.subscribe(estado => {
      this.toDos = estado.toDos;
      this.filtroActual = estado.filtro;
    })
  }

}
