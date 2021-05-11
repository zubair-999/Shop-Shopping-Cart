import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Products',
    route: '/products',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Products',
        to: '/products/all-products',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Product',
        to: '/products/add-new-product',
      }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Orders',
    route: '/products',
    icon: 'cil-basket',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Order',
        to: '/orders/all-orders',
      }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Account',
    icon: 'cil-credit-card',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Expense',
        to: '/account/expense',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Income',
        to: '/account/income',
      }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Settings',
    icon: 'cil-settings',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Expense Category',
        to: '/settings/expense-category',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Income Category',
        to: '/settings/income-category',
      }
    ]
  }
]

export default _nav
