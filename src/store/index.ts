import createSagaMiddleware from "redux-saga"
import { createStore, compose, applyMiddleware, Store } from "redux"
import rootReducer from "../reducers/index"
import rootSaga from "../sagas/index"
import { IFileResponse } from "../sagas/loadFilesList"

const configureStore = (): Store => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(sagaMiddleware),
    process.env.NODE_ENV === "development" && (window as any).devToolsExtension
      ? (window as any).devToolsExtension()
      : (f: any) => f
  ))
  sagaMiddleware.run(rootSaga)
  return store
}

export interface IRootState {
  watchingFile?: IFile
  filesList: IFileResponse[]
}

export const initialState: IRootState = {
  filesList: []
}

export default configureStore
