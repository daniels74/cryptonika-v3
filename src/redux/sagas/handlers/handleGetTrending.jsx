import { call, put } from "redux-saga/effects";
import { setTrending } from "../../reducers/trendingSlice";
import { requestGetTrending } from "../requests/requestGetTrending";

export function* handleGetTrending(action) {
  try {
    const response = yield call(requestGetTrending);
    const { data } = response;
    console.log("handling top trending data", data);
    yield put(setTrending({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
