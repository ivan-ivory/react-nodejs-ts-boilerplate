import * as React from 'react'
import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import { Button, FormGroup, Row, Col } from 'reactstrap'
import { AvForm, AvGroup, AvField } from 'availity-reactstrap-validation'
import { NoteStore } from '../../stores'
import { NoteItem } from '../../components'

interface IProps {
  noteStore: NoteStore
}

@inject('noteStore')
@observer
export class Notes extends React.Component<IProps, {}> {
  private noteStore: NoteStore
  @observable private notes: string[]

  constructor(props: IProps) {
    super(props)
    this.noteStore = props.noteStore
    this.notes = this.noteStore.items
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event: React.SyntheticEvent, errors: string[], values: { [key: string]: string }) {
    this.noteStore.add(values.note)
  }

  noteRow(item: string) {
    return (
      <NoteItem item={item}></NoteItem>
    )
  }

  public render() {

    return (
      <React.Fragment>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Row className={'mb-5'}>
              <Col>Simple validation and store example</Col>
            </Row>
            <AvForm onSubmit={this.handleSubmit}>
              <AvGroup row>
                <Col>
                  <AvField name="note" id="note" label="Note" type="text" grid={{ sm: 10 }} validate={{
                    required: { value: true, errorMessage: 'This field is required' },
                    minLength: { value: 3, errorMessage: 'Must be more than 2 characters' }
                  }} />
                </Col>
              </AvGroup>
              <FormGroup check row>
                <Col>
                  <div className="text-right">
                    <Button disabled={false}>Submit</Button>
                  </div>
                </Col>
              </FormGroup>
            </AvForm>
          </Col>
          <Col sm={{ size: 6, offset: 3 }}>
            {this.notes.map(x => this.noteRow(x))}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
