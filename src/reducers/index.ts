import { reducerWithInitialState } from "typescript-fsa-reducers"
import { initialState } from "../store"
import { successedLoadFile } from "../actions/file"
import { successedLoadFilesList } from "../actions/filesList"

const rootReducer = reducerWithInitialState(initialState)
  .case(successedLoadFile, (state, payload) => ({
    ...state,
    watchingFile: payload.file
  }))
  .case(successedLoadFilesList, (state, payload) => ({
    ...state,
    filesList: payload.filesList
  }))

export default rootReducer
