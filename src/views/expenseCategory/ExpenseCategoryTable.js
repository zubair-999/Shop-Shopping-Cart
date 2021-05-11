import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip, Popconfirm} from 'antd';
import {DeleteOutlined, EditOutlined, PlusCircleOutlined} from "@ant-design/icons";
import { ExpenseCategoryDeleteAction, ExpenseCategoryTabelAction } from '../../redux/actions/ExpenseCategoryAction'
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import {Button} from "react-bootstrap";
import './ExpenseCategory.css';
import {CCard, CCardBody, CDataTable} from "@coreui/react";

const fields = ['name', 'createdAt', 'action']
const ExpenseCategoryTable = ({ history }) => {
  const dispatch = useDispatch()
  const ExCategoryList = useSelector(state => state.ExCategoryList)
  const { loading, error, excategories } = ExCategoryList
  const ExCategoryDelete = useSelector(state => state.ExCategoryDelete)
  const { success, loading: loadingDelete, error: errorDelete } = ExCategoryDelete
  const onExpensesCategoryEditHandler = (id) => {
    excategories.filter(category => {
      if (category._id === id) {
        return true
      }
      else {
        return false
      }
    })
    history.push(`/settings/edit-expense-category/${id}`)
  }
  const onExpensesCategoryDeleteHandler = (id) => {
    dispatch(ExpenseCategoryDeleteAction(id))
  }

  useEffect(() => {
    dispatch(ExpenseCategoryTabelAction())
  }, [dispatch, success])
  const AddNewHandler =() => {
    history.push('/settings/add-new-expense-category')
  }
  return (
    <>
      <Tooltip title="Add New Expense Category" >
        <Button style={{float:'right'}} variant='light' onClick={AddNewHandler}><PlusCircleOutlined /></Button>
      </Tooltip>
      <h1>Expenses Categories</h1>
      {loadingDelete && <Loader/>}
      {errorDelete && <Message variant='danger'>{error}</Message>}
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :
        <CCard>
          <CCardBody>
            <CDataTable
              items={excategories}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'action':
                  (item)=>(
                    <td>
                      <div style={{display: 'flex'}} className="d-flex">
                        <div style={{marginRight: '10px'}}>
                          <Popconfirm
                            title="Are you sure to Edit this Expense Category?"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={() => onExpensesCategoryEditHandler(item._id)}
                          >
                            <Tooltip title="Edit Expense Category">
                              <Button
                                variant='light'
                              >
                                <EditOutlined/>
                              </Button>
                            </Tooltip>
                          </Popconfirm>
                        </div>
                        <Popconfirm
                          title="Are you sure to delete this Expense Category?"
                          okText="Yes"
                          cancelText="No"
                          style={{marginLeft: '30px'}}
                          onConfirm={() => onExpensesCategoryDeleteHandler(item._id)}
                        >
                          <Tooltip title="Delete Expense Category">
                            <Button
                              variant='light'
                            >
                              <DeleteOutlined/>
                            </Button>
                          </Tooltip>
                        </Popconfirm>
                      </div>
                    </td>
                  )
              }}
            />
          </CCardBody>
        </CCard>
      }
    </>
  )
}
export default ExpenseCategoryTable
