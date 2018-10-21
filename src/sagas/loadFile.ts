import { ILoadFilePayload } from "../actions/file"
import { Action } from "typescript-fsa"
import { call, put } from "redux-saga/effects"
import { bfp } from "bitcoinfiles"
import * as fileType from "file-type"

export function* loadFile(action: Action<ILoadFilePayload>) {
  try {
    const data = yield call(downloadFile, action.payload.fileUri)
    const type = getFileType(data)
    yield put({type: "SUCCESSED_LOAD_FILE", payload: {file: {data, type}}})
  } catch (e) {
    yield put({type: "FAILED_LOAD_FILE", e: e.message})
  }
}

const downloadFile = (fileUri: string) =>
  bfp.downloadFile(fileUri).then((it) => {
    if (!it.passesHashCheck) {
      throw new Error("Failed hash check.")
    }
    return it.fileBuf
  })

const getFileType = (data: Buffer) => {
  const type = fileType(data)
  if (type) {
    return type.mime
  } else {
    return "text/plain"
  }
}
