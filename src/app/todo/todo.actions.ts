import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOOGLE_TODO = '[TODO] Toogle todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const ELIMINAR_TODO = '[TODO] Eliminar todo';
export const ELIMINAR_ALL_TODO = '[TODO] Eliminar ALL todo';
export const TOOGLE_ALL_TODO = '[TODO] Toogle All todo';


export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODO;

    constructor(public texto: string){
    }

}


export class EditarTodoAction implements Action{
    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string){

    }
}



export class EliminarTodoAction implements Action{
    readonly type = ELIMINAR_TODO;

    constructor(public id: number){

    }
}



export class EliminarAllAction implements Action{
    readonly type = ELIMINAR_ALL_TODO;

    constructor(public completo: boolean){

    }
}

export class ToogleTodoAction implements Action{
    readonly type = TOOGLE_TODO;

    constructor(public id: number){
    }

}


export class ToogleAllAction implements Action{
    readonly type = TOOGLE_ALL_TODO;

    constructor(public completado: boolean){
    }

}

export type Acciones = AgregarTodoAction | ToogleTodoAction | EditarTodoAction | EliminarTodoAction | ToogleAllAction | EliminarAllAction;