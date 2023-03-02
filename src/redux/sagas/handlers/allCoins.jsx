import { call, put } from "redux-saga/effects";
import { setAllCoins } from "../../reducers/allCoinsSlice";
import { requestGetAllCoins } from "../requests/allCoins";

export function* handleGetAllCoins(action) {
  try {
    const response = yield call(requestGetAllCoins);
    const { data } = response;
    yield put(setAllCoins({ ...data }));
    console.log("handling coinListData", data);
  } catch (error) {
    console.log(error);
  }
}
