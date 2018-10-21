import { Dispatch } from "redux"
import { connect } from "react-redux"
import { IRootState } from "../store"
import FilesList from "../components/FilesList"
import { loadFilesList } from "../actions/filesList"

const mapStateToProps = (state: IRootState) => ({
  filesList: state.filesList
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadFilesList: () => {
      return dispatch(loadFilesList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilesList)
