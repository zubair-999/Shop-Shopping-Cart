import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CProgress
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdownTasks = () => {
  const itemsCount = 2
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-list" />
        <CBadge shape="pill" color="warning">{itemsCount}</CBadge>
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end" className="pt-0">
        <CDropdownItem
          header
          tag="div"
          className="text-center"
          color="light"
        >
          <strong>You have {itemsCount} pending orders</strong>
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="small mb-1">Upgrade NPM &amp; Bower <span
            className="float-right"><strong>0%</strong></span></div>
          <CProgress size="xs" color="info" value={0} />
        </CDropdownItem>
        <CDropdownItem className="d-block">
          <div className="small mb-1">ReactJS Version <span className="float-right"><strong>25%</strong></span></div>
          <CProgress size="xs" color="danger" value={25} />
        </CDropdownItem>
        <CDropdownItem className="text-center border-top"><strong>View all tasks</strong></CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownTasks
