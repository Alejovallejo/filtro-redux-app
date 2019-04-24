import { Todo } from '../todo/model/todo.module';
import { Action } from '@ngrx/store';

export const SET_FILTRO = '[Todo] Set Filtro';



export type filtroValidos = 'completados' | 'pendientes' | 'todos';


export class SetFiltroTodo implements Action{
        readonly type = SET_FILTRO;
    
    constructor(public filtro: filtroValidos){

    }
}




export type acciones = SetFiltroTodo;





