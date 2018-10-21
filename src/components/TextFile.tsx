import * as React from "react"
import IFileProps from "./IFileProps"

const TextFile: React.SFC<IFileProps> = (props: IFileProps) => (
  <p>{props.data.toString()}</p>
)

export default TextFile
