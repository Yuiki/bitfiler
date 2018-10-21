import { actionCreatorFactory } from "typescript-fsa"

export interface ILoadFilePayload {
  fileUri: string
}

interface ISuccessedLoadFile {
  file: IFile
}

const actionCreator = actionCreatorFactory()

export const loadFile = actionCreator<ILoadFilePayload>("LOAD_FILE")
export const successedLoadFile = actionCreator<ISuccessedLoadFile>("SUCCESSED_LOAD_FILE")
