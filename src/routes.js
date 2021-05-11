import React from 'react';


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const AllProducts = React.lazy(() => import('./views/Products/AllProducts'));
const ProductTable = React.lazy(() => import('./views/Products/ProductTable'))
const AddNewProduct = React.lazy(() => import('./views/Products/AddNewProduct'));
const EditProduct = React.lazy(() => import('./views/Products/EditProduct'))
const ExpenseCategory = React.lazy(() => import('./views/expenseCategory/ExpenseCategoryTable'))
const AddExpenseCategory = React.lazy(() => import('./views/expenseCategory/ExpenseCategoryAdd'))
const EditExpenseCategory = React.lazy(() => import('./views/expenseCategory/ExpenseCategoryEdit'))
const IncomeCategory = React.lazy(() => import('./views/incomeCategory/IncomeCategoryTable'))
const AddIncomeCategory = React.lazy(() => import('./views/incomeCategory/IncomeCategoryAdd'))
const EditIncomeCategory = React.lazy(() => import('./views/incomeCategory/IncomeCategoryEdit'))
const Expense = React.lazy(() => import('./views/Expense/ExpenseTable'))
const AddExpense = React.lazy(() => import('./views/Expense/ExpenseAdd'))
const EditExpense = React.lazy(() => import('./views/Expense/ExpenseEdit'))
const Income = React.lazy(() => import('./views/Income/IncomeTable'))
const AddIncome = React.lazy(() => import('./views/Income/IncomeAdd'))
const EditIncome = React.lazy(() => import('./views/Income/IncomeEdit'))
const AllOrders = React.lazy(() => import('./views/Order/AllOrder'))
const Profile = React.lazy(() => import('./views/Profile/Profile'))
const ProfileEdit = React.lazy(() => import('./views/Profile/EditProfile'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/products', name: 'Products', component: AllProducts, exact: true },
  { path: '/products/all-products', name: 'All Products', component: AllProducts },
  { path: '/products/all-products-list', name: 'All Products List', component: ProductTable },
  { path: '/products/add-new-product', name: 'Add New Product', component: AddNewProduct },
  { path: '/products/edit-product/:id', name: 'Edit Product', component: EditProduct },
  {path: '/settings/expense-category', name: 'Expense Category', component: ExpenseCategory, exact: true},
  { path: '/settings/add-new-expense-category', name: 'Add New Expense Category', component: AddExpenseCategory },
  { path: '/settings/edit-expense-category/:id', name: 'Edit Expense Category', component: EditExpenseCategory },
  {path: '/settings/income-category', name: 'Income Category', component: IncomeCategory, exact: true},
  { path: '/settings/add-new-income-category', name: 'Add New Income Category', component: AddIncomeCategory },
  { path: '/settings/edit-income-category/:id', name: 'Edit Income Category', component: EditIncomeCategory },
  {path: '/account/expense', name: 'Expense', component: Expense, exact: true},
  { path: '/account/add-new-expense', name: 'Add New Expense', component: AddExpense },
  { path: '/account/edit-expense/:id', name: 'Edit Expense', component: EditExpense },
  {path: '/account/income', name: 'Income', component: Income, exact: true},
  { path: '/account/add-new-income', name: 'Add New Income', component: AddIncome },
  { path: '/account/edit-income/:id', name: 'Edit Income', component: EditIncome },
  { path: '/orders', name: 'Orders', component: AllOrders, exact: true },
  { path: '/orders/all-orders', name: 'All Orders', component: AllOrders },
  {path: '/profile', name: 'Profile', component: Profile, exact: true},
  {path: '/profile/profile-edit', name: 'Profile Edit', component: ProfileEdit}

];

export default routes;
