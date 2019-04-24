import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.module';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

const todo1 = new Todo('Vencer a thanos'); 
const todo2 = new Todo('Salvar al mundo'); 
const todo3 = new Todo('utilizar gema del tiempo'); 

todo2.completado = true;

const estadoInicial: Todo[] = [todo1,todo2,todo3];

export function todoReducer(state= estadoInicial,
            action): Todo[]{
    
    
    switch(action.type){
        
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [ ...state, todo];


        case fromTodo.TOOGLE_TODO:

        return state.map( todoEdit => {

            if(todoEdit.id === action.id){
                return {
                    ...todoEdit,
                    completado: !todoEdit.completado
                };
            }else{
                return todoEdit;
            }

        } ); 

        case fromTodo.EDITAR_TODO:

        return state.map( todoEdit => {

            if(todoEdit.id === action.id){
                return {
                    ...todoEdit,
                    texto: action.texto
                };
            }else{
                return todoEdit;
            }

        } ); 



        case fromTodo.TOOGLE_ALL_TODO:

            return state.map( todoEdit => {

                return {
                    ...todoEdit,
                    completado: action.completado
                };
    
            });

        case fromTodo.ELIMINAR_TODO:

            return state.filter(todoEdit => todoEdit.id !== action.id);

        case fromTodo.ELIMINAR_ALL_TODO:

            return state.filter(todoEdit => !todoEdit.completado);
                     
    
            default:
            return state;
        
}

}