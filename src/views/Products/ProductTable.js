import React, {useEffect} from 'react';
import { Tooltip, Popconfirm} from 'antd';
import {DeleteOutlined, EditOutlined, TableOutlined, UnorderedListOutlined, PlusCircleOutlined } from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {ProductAction} from "../../redux/actions/ProductAction";
import {ProductDeleteAction} from "../../redux/actions/ProductFunAction";
import { useHistory} from "react-router-dom";
import './Product.css'
import {Button} from "react-bootstrap";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import {
  CCard,
  CCardBody,
  CDataTable
} from '@coreui/react'

const fields =['name', 'price', 'stock', 'category', 'description', 'action']
const ProductTable=()=> {
  const history=useHistory();
  const dispatch=useDispatch();
  const productList=useSelector(state => state.productList)
  const prodDelete=useSelector(state => state.prodDelete)
  const {success, loading:loadingDelete, error:errorDelete}=prodDelete
  const {products, loading, error}=productList
  useEffect(()=>{
    dispatch(ProductAction())
  },[dispatch, success])
  const onProductEditHandler = (id) => {
    debugger
    products.filter(product => {
      if (product._id === id) {
        return true
      }
      else {
        return false
      }
    })
    history.push(`/products/edit-product/${id}`)
  }

  const onProductDeleteHandler = (id) => {
    dispatch(ProductDeleteAction(id))
  }
  const changeListHandler=()=>{
    history.push('/products/all-products-list')
  }
  const changeGirdHandler=()=>{
    history.push('/products/all-products')
  }
  const AddNewHandler =() => {
    history.push('/products/add-new-product')
  }
  return (
    <>
      <Tooltip title="Grid">
        <Button variant='light' onClick={changeGirdHandler}><TableOutlined /></Button>
      </Tooltip>
      <Tooltip title="List">
        <Button variant='light' onClick={changeListHandler}><UnorderedListOutlined /></Button>
      </Tooltip>
      <Tooltip title="Add New Product" >
        <Button style={{float:'right'}} variant='light' onClick={AddNewHandler}><PlusCircleOutlined /></Button>
      </Tooltip>
      <h1 style={{margin:'10px'}}>Products</h1>
      {loadingDelete && <Loader/>}
      {errorDelete && <Message variant='danger'>{error}</Message>}
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :
        <CCard>
          <CCardBody>
            <CDataTable
              items={products}
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
                            title="Are you sure to Edit this Product?"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={() => onProductEditHandler(item._id)}
                          >
                            <Tooltip title="Edit Product">
                              <Button
                                variant='light'
                              >
                                <EditOutlined/>
                              </Button>
                            </Tooltip>
                          </Popconfirm>
                        </div>
                        <Popconfirm
                          title="Are you sure to delete this Product?"
                          okText="Yes"
                          cancelText="No"
                          style={{marginLeft: '30px'}}
                          onConfirm={() => onProductDeleteHandler(item._id)}
                        >
                          <Tooltip title="Delete Product">
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
  );
}
export default ProductTable;
