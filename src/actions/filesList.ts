import { actionCreatorFactory } from "typescript-fsa"
import { IFileResponse } from "../sagas/loadFilesList"

interface ISuccessedLoadFilesList {
  filesList: IFileResponse[]
}

const actionCreator = actionCreatorFactory()

export const loadFilesList = actionCreator("LOAD_FILES_LIST")
export const successedLoadFilesList = actionCreator<ISuccessedLoadFilesList>("SUCCESSED_LOAD_FILES_LIST")
