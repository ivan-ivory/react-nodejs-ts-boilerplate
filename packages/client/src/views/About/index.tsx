import * as React from 'react'
import { Row, Col, Card, CardImg, CardTitle, CardGroup, CardBody } from 'reactstrap'
import * as reactPng from '../../assets/img/react.png'

export class About extends React.Component<{}, {}> {

  public render() {

    return (
      <React.Fragment>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <span>Features</span>
            <ul>
              <li>React 16</li>
              <li>React Hot Loader</li>
              <li>React Router 4</li>
              <ul>
                <li>React Router DOM</li>
              </ul>
              <li>Mobx 5</li>
              <li>CSS modules</li>
              <li>Hot Reload</li>
              <li>Source Map</li>
              <li>Typescript 3</li>
              <li>Webpack 4</li>
              <ul>
                <li>Uglify</li>
                <li>Imagemin</li>
                <li>Favicon Plugin</li>
              </ul>
              <li>ESLint</li>
              <ul>
                <li>TypeScript ESLint</li>
              </ul>
            </ul>
            <span>TODO</span>
            <ul>
              <li>Server</li>
              <li>REST</li>
              <li>GraphQl</li>
            </ul>
            <img src={reactPng} alt='React logo png' />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
