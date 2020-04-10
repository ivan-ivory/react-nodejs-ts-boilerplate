import * as stores from './'
import { syncHistoryWithStore } from 'mobx-react-router'
import { History, createBrowserHistory } from 'history'

export class RootStore {
  public history: History
  public routerStore: stores.RouterStore
  public noteStore: stores.NoteStore

  public constructor() {
    const browserHistory = createBrowserHistory()

    this.routerStore = new stores.RouterStore()
    this.history = syncHistoryWithStore(browserHistory, this.routerStore)

    this.noteStore = new stores.NoteStore(this)

    return {
      routerStore: this.routerStore,
      history: this.history,
      noteStore: this.noteStore
    }
  }
}
