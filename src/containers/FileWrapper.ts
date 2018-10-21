import { Dispatch } from "redux"
import { connect } from "react-redux"
import FileWrapper from "../components/FileWrapper"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { loadFile, removeCachedFile } from "../actions/file"
import { IRootState } from "../store"

const mapStateToProps = (state: IRootState) => ({
  file: state.watchingFile
})

const mapDispatchToProps = (dispatch: Dispatch, props: RouteComponentProps) => {
  return {
    loadFile: () => {
      dispatch(removeCachedFile())

      const path = props.location.pathname.split("/")
      const fileUri = path[path.length - 1]
      return dispatch(loadFile({fileUri}))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FileWrapper))
