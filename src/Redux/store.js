import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga" 
import rootReducer from "./rootReducer";
import userSaga from "./Auth/UserSaga";

const sagaMiddleware = createSagaMiddleware() 
const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
})
sagaMiddleware.run(userSaga)
export default store;