import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip, Popconfirm} from 'antd';
import {DeleteOutlined, EditOutlined, PlusCircleOutlined} from "@ant-design/icons";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import {Button} from "react-bootstrap";
import './IncomeCategory.css';
import {useHistory} from "react-router-dom";
import {IncomeCategoryDeleteAction, IncomeCategoryTabelAction} from "../../redux/actions/IncomeCategoryAction";
import {CCard, CCardBody, CDataTable} from "@coreui/react";

const fields = ['name', 'createdAt', 'action']
const IncomeCategoryTable = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const InCategoryList = useSelector(state => state.InCategoryList)
  const { loading, error, incategories } = InCategoryList
  const InCategoryDelete = useSelector(state => state.InCategoryDelete)
  const { success, loading: loadingDelete, error: errorDelete } = InCategoryDelete

  const onIncomeCategoryEditHandler = (id) => {
    incategories.filter(category => {
      if (category._id === id) {
        return true
      }
      else {
        return false
      }
    })
    history.push(`/settings/edit-income-category/${id}`)
  }
  const onIncomeCategoryDeleteHandler = (id) => {
    dispatch(IncomeCategoryDeleteAction(id))
  }

  useEffect(() => {
    dispatch(IncomeCategoryTabelAction())
  }, [dispatch, success])
  const AddNewHandler =() => {
    history.push('/settings/add-new-income-category')
  }
  return (
    <>
      <Tooltip title="Add New Income Category" >
        <Button style={{float:'right'}} variant='light' onClick={AddNewHandler}><PlusCircleOutlined /></Button>
      </Tooltip>
      <h1>Income Categories</h1>
      {loadingDelete && <Loader/>}
      {errorDelete && <Message variant='danger'>{error}</Message>}
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :
        <CCard>
          <CCardBody>
            <CDataTable
              items={incategories}
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
                            title="Are you sure to Edit this Income Category?"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={() => onIncomeCategoryEditHandler(item._id)}
                          >
                            <Tooltip title="Edit Income Category">
                              <Button
                                variant='light'
                              >
                                <EditOutlined/>
                              </Button>
                            </Tooltip>
                          </Popconfirm>
                        </div>
                        <Popconfirm
                          title="Are you sure to delete this Income Category?"
                          okText="Yes"
                          cancelText="No"
                          style={{marginLeft: '30px'}}
                          onConfirm={() => onIncomeCategoryDeleteHandler(item._id)}
                        >
                          <Tooltip title="Delete Income Category">
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
export default IncomeCategoryTable
