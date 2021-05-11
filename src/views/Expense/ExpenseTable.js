import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip, Popconfirm} from 'antd';
import {DeleteOutlined, EditOutlined, PlusCircleOutlined} from "@ant-design/icons";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import {Button} from "react-bootstrap";
import './Expense.css';
import {ExpensesDeleteAction, ExpensesTabelAction} from "../../redux/actions/ExpenseAction";
import {CCard, CCardBody, CDataTable} from "@coreui/react";

const fields=['date', 'category', 'quantity', 'total_amount', 'action']
const ExpenseTable = ({ history }) => {
  const expenseDelete = useSelector(state => state.expenseDelete)
  const { success, loading: loadingDelete, error: errorDelete } = expenseDelete
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ExpensesTabelAction())
  }, [dispatch, success])
  const expenseList = useSelector(state => state.expenseList)
  const { loading, error, expenses } = expenseList
  const onExpensesEditHandler = (id) => {
    expenses.filter(category => {
      if (category._id === id) {
        return true
      }
      else {
        return false
      }
    })
    history.push(`/account/edit-expense/${id}`)
  }
  const onExpensesDeleteHandler = (id) => {
    dispatch(ExpensesDeleteAction(id))
  }
  const AddNewHandler =() => {
    history.push('/account/add-new-expense')
  }
  return (
    <>
      <Tooltip title="Add New Expense" >
        <Button style={{float:'right'}} variant='light' onClick={AddNewHandler}><PlusCircleOutlined /></Button>
      </Tooltip>
      <h1>Expenses</h1>
      {loadingDelete && <Loader/>}
      {errorDelete && <Message variant='danger'>{error}</Message>}
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :
        <CCard>
          <CCardBody>
            <CDataTable
              items={expenses}
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
                            title="Are you sure to Edit this Expense ?"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={() => onExpensesEditHandler(item._id)}
                          >
                            <Tooltip title="Edit Expense ">
                              <Button
                                variant='light'
                              >
                                <EditOutlined/>
                              </Button>
                            </Tooltip>
                          </Popconfirm>
                        </div>
                        <Popconfirm
                          title="Are you sure to delete this Expense ?"
                          okText="Yes"
                          cancelText="No"
                          style={{marginLeft: '30px'}}
                          onConfirm={() => onExpensesDeleteHandler(item._id)}
                        >
                          <Tooltip title="Delete Expense ">
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
export default ExpenseTable
