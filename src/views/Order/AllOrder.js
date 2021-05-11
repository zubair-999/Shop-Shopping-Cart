import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {OrdersAction} from "../../redux/actions/OrderAction";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import {CCard, CCardBody, CDataTable} from "@coreui/react";

const fields =['product', 'quantity']
const AllOrder = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(OrdersAction())
  },[dispatch])
  const orderList = useSelector(state => state.orderList)
  const {orders, loading, error} = orderList
  return (
    <>
      <h1 style={{margin:'10px'}}>Orders</h1>
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> :
        <CCard>
          <CCardBody>
            <CDataTable
              items={orders}
              fields={fields}
              itemsPerPage={5}
              pagination
            />
          </CCardBody>
        </CCard>
      }
    </>
  );
}
export default AllOrder;
