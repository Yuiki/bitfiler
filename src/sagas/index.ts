import { all, takeLatest } from "redux-saga/effects"
import { loadFile } from "./loadFile"
import { loadFilesList } from "./loadFilesList"

export default function* rootSaga() {
  yield all([
    takeLatest("LOAD_FILE", loadFile),
    takeLatest("LOAD_FILES_LIST", loadFilesList)
  ])
}
