import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ProductAction} from "../../redux/actions/ProductAction";
import {Button, Col, Row} from "react-bootstrap";
import Product from "./Product";
import {useHistory} from "react-router-dom";
import {Tooltip} from "antd";
import {TableOutlined, UnorderedListOutlined, PlusCircleOutlined} from "@ant-design/icons";
import Loader from '../../Loader/Loader';
import Message from "../../Message/Message";

const Products=()=>{
  const history=useHistory();
  const dispatch=useDispatch();
  const productList=useSelector(state => state.productList)
  const prodDelete=useSelector(state => state.prodDelete)
  const {success, loading:loadingDelete, error:errorDelete}=prodDelete
  const {products, loading, error}=productList
  useEffect(()=>{
    dispatch(ProductAction())
  },[dispatch, success])

  const changeListHandler=()=>{
    history.push('/products/all-products-list')
  }
  const changeGirdHandler=()=>{
    history.push('/products/all-products')
  }
  const AddNewHandler =() => {
    history.push('/products/add-new-product')
  }
  return(
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
          <Row>
            {products && products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
              </Col>
            ))}
          </Row>
      }
    </>
  )
}
export default Products;
