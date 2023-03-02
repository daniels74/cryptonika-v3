import {configureStore,combineReducers,getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import allCoinsReducer from "./reducers/allCoinsSlice";
import trendingReducer from "./reducers/trendingSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  trending: trendingReducer,
  allCoins: allCoinsReducer
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});
sagaMiddleware.run(watcherSaga);

export default store;
