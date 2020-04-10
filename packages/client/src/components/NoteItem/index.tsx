import * as React from 'react'

interface IProps {
  item: string
}

export class NoteItem extends React.Component<IProps, {}> {

  public render() {
    let item = this.props.item

    return (
      <div>{item}</div>
    )
  }
}
