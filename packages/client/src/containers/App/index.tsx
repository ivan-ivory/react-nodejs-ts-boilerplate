import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { Header } from '../../components'
import { About, Notes } from '../../views'
import * as style from './app.scss'

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <div className={`${style.content} container`}>
          <Switch>
            <Route exact path='/' component={Notes} />
            <Route path='/notes' component={Notes} />
            <Route path='/about' component={About} />
            {/* Keep it last */}
            <Route render={() => <Redirect to='/404' />} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

export default hot(module)(App)
