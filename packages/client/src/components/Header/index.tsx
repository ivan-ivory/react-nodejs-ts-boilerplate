import * as React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import * as logo from '../../assets/img/logo.png'
import * as style from './header.scss'

@observer
export class Header extends React.Component<{}, {}> {
  @observable private isOpen: boolean = false

  public render() {
    let toggle = () => this.isOpen = !this.isOpen

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img className={style.logo} src={logo} alt="Logo React" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={this.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
