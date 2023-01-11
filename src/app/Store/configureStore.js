import { configureStore } from "@reduxjs/toolkit";
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from "./rootReducer";

export function configureReduxStore() {
    return configureStore(rootReducer, devToolsEnhancer())
}