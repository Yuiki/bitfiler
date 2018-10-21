import * as React from "react"
import { Menu, Segment } from "semantic-ui-react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { History } from "history"
import "./Header.css"

const Header: React.SFC<RouteComponentProps> = (props: RouteComponentProps) => (
  <Segment className="header" inverted={true}>
    <Menu size="large" inverted={true} pointing={true} secondary={true}>
      <Menu.Item
        name="bitfiler"
        onClick={onHomeClicked(props.history)}
      />
    </Menu>
  </Segment>
)

const onHomeClicked = (history: History) => () => {
  history.push("/")
}

export default withRouter(Header)
