import { configureStore } from "@reduxjs/toolkit";
import  editorSlice  from "../features/editor/editorSlice";

export const store = configureStore({
    reducer:editorSlice

})
