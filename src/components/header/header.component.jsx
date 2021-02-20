import React, { useState } from 'react';
import './header.styles.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.componnt';
import {connect} from 'react-redux'
import {selectCartHidden} from '../../redux/cart/cart-selector'
const Header = ({hidden}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='header' color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">صفحه اصلی</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/shop">فروشگاه</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                محصولات
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  چادر
                </DropdownItem>
                <DropdownItem>
                  روسری
                </DropdownItem>
                <DropdownItem>
                  بچگانه
                </DropdownItem>
                <DropdownItem>
                  زنانه
                </DropdownItem>
                <DropdownItem divider />
                {/* <DropdownItem>
                  Reset
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/signin">ثبت نام</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
        <CartIcon />
      </Navbar>
      {
        hidden ? null : <CartDropdown />
      }
    </div>
  );
}

const mapStateToProps=(state)=>({
  hidden:selectCartHidden(state)
})

export default connect(mapStateToProps)(Header);