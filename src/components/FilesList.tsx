import * as React from "react"
import { lifecycle } from "recompose"
import { Container, Table, Icon, Loader, Message } from "semantic-ui-react"
import { IFileResponse } from "../sagas/loadFilesList"
import { Link } from "react-router-dom"

interface IProps {
  loadFilesList: () => void
  filesList: IFileResponse[]
}

const FilesList: React.SFC<IProps> = (props: IProps) => (
  <Container>
    <Message size="large" info={true} icon={true}>
      <Icon name="info" />
      <Message.Header>bitfiler is under development.</Message.Header>
      <p>
        Bitfiler is filer supports the files on the BCH Blockchain
        uploaded by {<a href="https://bitcoinfiles.com/">BFP</a>}.
        <br />Currently supports image and text.
        <br />Contact: <a href="https://twitter.com/yuikijp">@yuikijp</a>
      </p>
    </Message>
    {props.filesList.length === 0 && <Loader active={true} size="massive">Loading...</Loader>}
    <Table color="black" celled={true} striped={true}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>File name</Table.HeaderCell>
          <Table.HeaderCell>URI</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.filesList.map(renderListItem)}
      </Table.Body>
    </Table>
  </Container>
)

const renderListItem = (item: IFileResponse, idx: number) => (
  <Table.Row key={idx}>
    <Table.Cell>
      <Icon name="file outline" /> {item.filename}
    </Table.Cell>
    <Table.Cell><Link to={`/files/${item.URI}`}>{item.URI}</Link></Table.Cell>
  </Table.Row>
)

export default lifecycle<IProps, {}>({
  componentDidMount() {
    this.props.loadFilesList()
  }
})(FilesList)
