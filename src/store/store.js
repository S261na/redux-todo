import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice' // то, что экспортируется по дефолту

export default configureStore({ // позволяет создавать хранилище
    reducer: { // глобальный смотрящий за всеми складами 
        todos: todoReducer
    }
})