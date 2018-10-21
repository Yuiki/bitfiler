import * as React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import FileWrapper from "./containers/FileWrapper"
import "semantic-ui-css/semantic.min.css"
import Header from "./components/Header"
import FilesList from "./containers/FilesList"

const App: React.SFC = () => (
  <BrowserRouter>
    <>
      <Header />
      <Route path="/" exact={true} component={FilesList} />
      <Route path="/files" component={FileWrapper} />
    </>
  </BrowserRouter>
)

export default App
