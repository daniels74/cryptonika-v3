import { takeLatest } from "redux-saga/effects";
import { handleGetAllCoins } from "./handlers/allCoins";
import { getAllCoins } from "../reducers/allCoinsSlice";

//for nasa
import { getTrending } from "../reducers/trendingSlice";
import { handleGetTrending } from "./handlers/handleGetTrending";

export function* watcherSaga() {
  yield takeLatest(getAllCoins.type, handleGetAllCoins);
  yield takeLatest(getTrending.type, handleGetTrending);
}
