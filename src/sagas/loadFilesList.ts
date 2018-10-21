import { call, put } from "redux-saga/effects"

export function* loadFilesList() {
  try {
    const filesList = yield call(fetchFilesList)
    yield put({type: "SUCCESSED_LOAD_FILES_LIST", payload: {filesList}})
  } catch (e) {
    yield put({type: "FAILED_LOAD_FILES_LIST", e: e.message})
  }
}

const fetchFilesList = (): Promise<IFileResponse> => {
  const query = {
    v: 3,
    q: { db: [ "c" ], find: { "out.h1": "42465000", "out.h2": "01" } },
    r: { f: '[ .[] | { filename: .out[0].s4, URI: "bitcoinfile:\\(.tx.h)" } ]' }
  }
  const encodedQuery = Buffer.from(JSON.stringify(query)).toString("base64")
  const url = `https://bitdb.network/q/${encodedQuery}`
  const key = process.env.REACT_APP_BITDB_API_KEY
  if (!key) {
    return Promise.reject("bitdb api key is not found.")
  }
  return fetch(url, { headers: {key} }).then((it) => it.json()).then((it) => it.c)
}

export interface IFileResponse {
  filename: string
  URI: string
}
