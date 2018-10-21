import * as React from "react"
import { lifecycle } from "recompose"
import ImageFile from "./ImageFile"
import TextFile from "./TextFile"
import { Loader, Container } from "semantic-ui-react"

interface IProps {
  loadFile: () => void
  file?: IFile
}

const FileWrapper: React.SFC<IProps> = (props: IProps) => (
  <Container>
    {props.file ? renderFile(props.file) : <Loader active={true} size="massive">Loading...</Loader>}
  </Container>
)

const renderFile = (file: IFile) => (
  file.type.startsWith("image/") ? <ImageFile data={file.data}/> : <TextFile data={file.data} />)

export default lifecycle<IProps, {}>({
  componentDidMount() {
    this.props.loadFile()
  }
})(FileWrapper)
