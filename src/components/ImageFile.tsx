import * as React from "react"
import { Image } from "semantic-ui-react"
import IFileProps from "./IFileProps"

const ImageFile: React.SFC<IFileProps> = (props: IFileProps) => (
  <Image centered={true} src={`data:image;base64,${props.data.toString("base64")}`} />
)

export default ImageFile
