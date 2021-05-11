import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip, Popconfirm} from 'antd';
import {DeleteOutlined, EditOutlined, PlusCircleOutlined} from "@ant-design/icons";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import {Button} from "react-bootstrap";
import './Income.css';
import {IncomeDeleteAction, IncomeTabelAction} from "../../redux/actions/IncomeAction";
import {CCard, CCardBody, CDataTable} from "@coreui/react";


const fields = ['date', 'category', 'total_amount', 'action']
const IncomeTable = ({ history }) => {
  const dispatch = useDispatch()
  const incomeList = useSelector(state => state.incomeList)
  const { loading, error, incomes } = incomeList
  const incomeDelete = useSelector(state => state.incomeDelete)
  const { success, loading: loadingDelete, error: errorDelete } = incomeDelete
  const onIncomeEditHandler = (id) => {
    incomes.filter(category => {
      if (category._id === id) {
        return true
      }
      else {
        return false
      }
    })
    history.push(`/account/edit-income/${id}`)
  }
  const onIncomeDeleteHandler = (id) => {
    dispatch(IncomeDeleteAction(id))
  }

  useEffect(() => {
    dispatch(IncomeTabelAction())
  }, [dispatch, success])
  const AddNewHandler =() => {
    history.push('/account/add-new-income')
  }
  return (
    <>
      <Tooltip title="Add New Income" >
        <Button style={{float:'right'}} variant='light' onClick={AddNewHandler}><PlusCircleOutlined /></Button>
      </Tooltip>
      <h1>Income</h1>
      {loadingDelete && <Loader/>}
      {errorDelete && <Message variant='danger'>{error}</Message>}
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :
        <CCard>
          <CCardBody>
            <CDataTable
              items={incomes}
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
                            title="Are you sure to Edit this Income ?"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={() => onIncomeEditHandler(item._id)}
                          >
                            <Tooltip title="Edit Income ">
                              <Button
                                variant='light'
                              >
                                <EditOutlined/>
                              </Button>
                            </Tooltip>
                          </Popconfirm>
                        </div>
                        <Popconfirm
                          title="Are you sure to delete this Income ?"
                          okText="Yes"
                          cancelText="No"
                          style={{marginLeft: '30px'}}
                          onConfirm={() => onIncomeDeleteHandler(item._id)}
                        >
                          <Tooltip title="Delete Income ">
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
export default IncomeTable
