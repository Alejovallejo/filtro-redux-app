import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../model/todo.module';
import { EliminarAllAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  
  pendientes: number;
  completado: false;

  filtrosValidos: fromFiltro.filtroValidos [] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtroValidos;

  constructor(private store: Store<AppState>) { 

  }

  ngOnInit() {

    this.store.subscribe(state => {
        this.contarPendientes(state.todos);
        this.filtroActual = state.filtro;
    });
  }


  cambiarFiltro(nuevofiltro: fromFiltro.filtroValidos){

    const accion = new fromFiltro.SetFiltroTodo(nuevofiltro);
    this.store.dispatch(accion);
  }


  contarPendientes(todos: Todo[]){

    this.pendientes = todos.filter( todo => !todo.completado).length;

  }


  limpiarcheck(){
    
    const accion = new EliminarAllAction(this.completado); 
    this.store.dispatch(accion)

  }


}
