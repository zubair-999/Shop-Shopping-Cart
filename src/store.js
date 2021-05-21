import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { SignupReducer } from './redux/reducers/SignupReducer';
import {SigninReducer} from "./redux/reducers/SigninReducer";
import {ProductReducer} from "./redux/reducers/ProductReducer";
import {
  ProductAddReducer, ProductCategoryReducer,
  ProductDeleteReducer,
  ProductEditReducer,
  ProductUpdateReducer
} from "./redux/reducers/ProductFunReducer";
import {OrderReducer} from "./redux/reducers/OrderReducer";
import {
  ExpenseCategoryDeleteReducer,
  ExpenseCategoryEditReducer,
  ExpenseCategorySaveReducer,
  ExpenseCategoryTableReducer, ExpenseCategoryUpdateReducer
} from "./redux/reducers/ExpenseCategoryReducer";
import {
  IncomeCategoryDeleteReducer,
  IncomeCategoryEditReducer,
  IncomeCategorySaveReducer,
  IncomeCategoryTableReducer, IncomeCategoryUpdateReducer
} from "./redux/reducers/IncomeCategoryReducer";
import {
  ExpensesDeleteReducer,
  ExpensesEditReducer,
  ExpensesSaveReducer,
  ExpensesTableReducer,
  ExpensesUpdateReducer
} from "./redux/reducers/ExpenseReducer";
import {
  IncomeDeleteReducer,
  IncomeEditReducer,
  IncomeSaveReducer,
  IncomeTableReducer,
  IncomeUpdateReducer
} from "./redux/reducers/IncomeReducer";
import {ProfileReducer} from "./redux/reducers/ProfileReducer";
import {SalesTableReducer} from "./redux/reducers/SalesReportReducer";


const userInfoFromStorage = localStorage.getItem('token')
const middleware = [thunk]
const initialState = {
  userSignin: { token: userInfoFromStorage },
  sidebarShow: 'responsive'
};
const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const reducer = combineReducers({
  nav: changeState,
  userSignup: SignupReducer,
  userSignin: SigninReducer,
  productList: ProductReducer,
  productAdd: ProductAddReducer,
  prodEdit: ProductEditReducer,
  prodUpdate: ProductUpdateReducer,
  prodDelete: ProductDeleteReducer,
  orderList: OrderReducer,
  ExCategorySave: ExpenseCategorySaveReducer,
  ExCategoryList: ExpenseCategoryTableReducer,
  ExCategoryEdit: ExpenseCategoryEditReducer,
  ExCategoryUpdate: ExpenseCategoryUpdateReducer,
  ExCategoryDelete: ExpenseCategoryDeleteReducer,
  InCategorySave: IncomeCategorySaveReducer,
  InCategoryList: IncomeCategoryTableReducer,
  InCategoryEdit: IncomeCategoryEditReducer,
  InCategoryUpdate: IncomeCategoryUpdateReducer,
  InCategoryDelete: IncomeCategoryDeleteReducer,
  Expensesave: ExpensesSaveReducer,
  expenseList: ExpensesTableReducer,
  expenseEdit: ExpensesEditReducer,
  expenseUpdate: ExpensesUpdateReducer,
  expenseDelete: ExpensesDeleteReducer,
  Incomesave: IncomeSaveReducer,
  incomeList: IncomeTableReducer,
  incomeEdit: IncomeEditReducer,
  incomeUpdate: IncomeUpdateReducer,
  incomeDelete: IncomeDeleteReducer,
  profile:ProfileReducer,
  proUpdate:ProductUpdateReducer,
  SalesTable:SalesTableReducer,
  prodCategory:ProductCategoryReducer
})

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
