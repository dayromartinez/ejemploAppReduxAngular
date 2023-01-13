import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as acciones from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  toDoInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.toDoInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  agregar(): void {
    if(this.toDoInput.invalid){
      alert('No ha digitado ningún texto para la nueva tarea. Inténtelo nuevamente');
      return;
    }
    this.store.dispatch(acciones.crear({ texto: this.toDoInput.value }));
    this.toDoInput.reset();
    alert('¡Tarea creada correctamente!');
  }

}
