import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useDispatch} from "react-redux";
import {logout} from "../redux/actions/SigninAction";
import {useHistory} from "react-router-dom";

const TheHeaderDropdown = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout(() => {
      history.push("/login")
    }))
  }
  const profileHandler = () => {
    history.push("/profile")
  }
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Account
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem onClick={profileHandler}>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={logoutHandler}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Lock Account
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
