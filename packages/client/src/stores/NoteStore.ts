import { observable, action } from 'mobx'
import { RootStore } from './RootStore'

export class NoteStore {
  protected rootStore: RootStore

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable public items: string[] = []

  @action public add = (item: string) => {
    this.items.push(item)
  }
}
