import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as acciones from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() toDo!: ToDo;
  @ViewChild('inputFisico') textoInputFisico!: ElementRef;

  valorCampo!: FormControl;
  tareaCompletada!: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.toDo.completado = true;
    this.tareaCompletada = new FormControl(this.toDo.completado);
    this.valorCampo = new FormControl(this.toDo.texto, Validators.required);
    this.tareaCompletada.valueChanges.subscribe(valor => {
      console.log('EJECUTANDO ACCIÓN');

      this.store.dispatch(acciones.completado({id: this.toDo.id}))
    });
  }

  editar() {
    this.editando = true;
    this.valorCampo.setValue(this.toDo.texto);
    setTimeout(() => {
      this.textoInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    console.log('Entré aquí!!');
    console.log('Valor campo: ', this.valorCampo.value);


    if (this.valorCampo.invalid) return;
    if (this.valorCampo.value === this.toDo.texto) return;

    this.store.dispatch(acciones.editar({ id: this.toDo.id, texto: this.valorCampo.value}))
  }

  borrar() {
    this.store.dispatch(acciones.eliminar({id: this.toDo.id}));
  }

}
