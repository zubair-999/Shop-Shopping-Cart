import React, {lazy, useEffect} from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'
import {useDispatch, useSelector} from "react-redux";
import {SalesTableAction} from "../../redux/actions/SalesReportAction";

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const dispatch = useDispatch()
  const SalesTable = useSelector(state => state.SalesTable)
  const {salesTableData} =SalesTable
  useEffect(()=> {
    dispatch(SalesTableAction())
  }, [dispatch])
  return (
    <>
      {/*<WidgetsDropdown />*/}
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Report</h4>
              <div className="small text-muted">November 2017</div>
            </CCol>
            {/*<CCol sm="7" className="d-none d-md-block">*/}
              {/*<CButton color="primary" className="float-right">*/}
              {/*  <CIcon name="cil-cloud-download"/>*/}
              {/*</CButton>*/}
              {/*<CButtonGroup className="float-right mr-3">*/}
              {/*  {*/}
              {/*    ['Day', 'Month', 'Year'].map(value => (*/}
              {/*      <CButton*/}
              {/*        color="outline-secondary"*/}
              {/*        key={value}*/}
              {/*        className="mx-0"*/}
              {/*        active={value === 'Month'}*/}
              {/*      >*/}
              {/*        {value}*/}
              {/*      </CButton>*/}
              {/*    ))*/}
              {/*  }*/}
              {/*</CButtonGroup>*/}
            {/*</CCol>*/}
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Total Orders</div>
              <strong></strong>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 ">
              <div className="text-muted">Total Quantity</div>
              <strong></strong>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Total Amount</div>
              <strong></strong>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Complete Orders</div>
              <strong></strong>
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 ">
              <div className="text-muted">Cancel Orders</div>
              <strong></strong>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      {/*<WidgetsBrand withCharts/>*/}

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Traffic {' & '} Sales
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">Total Orders</small>
                        <br />
                        <strong className="h4"></strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">Cancel Orders</small>
                        <br />
                        <strong className="h4"></strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {/*<div className="progress-group mb-4">*/}
                  {/*  <div className="progress-group-prepend">*/}
                  {/*    <span className="progress-group-text">*/}
                  {/*      Monday*/}
                  {/*    </span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <div className="progress-group-header">*/}
                  {/*      <span className="title">Total Order</span>*/}
                  {/*      <span className="ml-auto font-weight-bold">43%</span>*/}
                  {/*    </div>*/}
                  {/*    <CProgress className="progress-xs" color="info" value="34" />*/}
                  {/*    <div className="progress-group-header">*/}
                  {/*      <span className="title">Cancel Order</span>*/}
                  {/*      <span className="ml-auto font-weight-bold">43</span>*/}
                  {/*    </div>*/}
                  {/*    <CProgress className="progress-xs" color="danger" value="78" />*/}
                  {/*    <div className="progress-group-header">*/}
                  {/*      <span className="title">Complete Order</span>*/}
                  {/*      <span className="ml-auto font-weight-bold">43%</span>*/}
                  {/*    </div>*/}
                  {/*    <CProgress className="progress-xs" color="success" value="78" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="progress-group mb-4">*/}
                  {/*  <div className="progress-group-prepend">*/}
                  {/*    <span className="progress-group-text">*/}
                  {/*    Tuesday*/}
                  {/*    </span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="info" value="56" />*/}
                  {/*    <CProgress className="progress-xs" color="danger" value="94" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="progress-group mb-4">*/}
                  {/*  <div className="progress-group-prepend">*/}
                  {/*    <span className="progress-group-text">*/}
                  {/*    Wednesday*/}
                  {/*    </span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="info" value="12" />*/}
                  {/*    <CProgress className="progress-xs" color="danger" value="67" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="progress-group mb-4">*/}
                  {/*  <div className="progress-group-prepend">*/}
                  {/*    <span className="progress-group-text">*/}
                  {/*    Thursday*/}
                  {/*    </span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="info" value="43" />*/}
                  {/*    <CProgress className="progress-xs" color="danger" value="91" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="progress-group mb-4">*/}
                  {/*  <div className="progress-group-prepend">*/}
                  {/*    <span className="progress-group-text">*/}
                  {/*    Friday*/}
                  {/*    </span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="info" value="22" />*/}
                  {/*    <CProgress className="progress-xs" color="danger" value="73" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="progress-group mb-4">*/}
                  {/*  <div className="progress-group-prepend">*/}
                  {/*    <span className="progress-group-text">*/}
                  {/*    Saturday*/}
                  {/*    </span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="info" value="53" />*/}
                  {/*    <CProgress className="progress-xs" color="danger" value="82" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="progress-group mb-4">*/}
                  {/*  <div className="progress-group-prepend">*/}
                  {/*    <span className="progress-group-text">*/}
                  {/*    Sunday*/}
                  {/*    </span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="info" value="9" />*/}
                  {/*    <CProgress className="progress-xs" color="danger" value="69" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="legend text-center">*/}
                  {/*  <small>*/}
                  {/*    <sup className="px-1"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>*/}
                  {/*    New clients*/}
                  {/*    &nbsp;*/}
                  {/*    <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>*/}
                  {/*    Recurring clients*/}
                  {/*  </small>*/}
                  {/*</div>*/}
                </CCol>

                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="success">
                        <small className="text-muted">Complete Orders</small>
                        <br />
                        <strong className="h4"></strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">Total Amount</small>
                        <br />
                        <strong className="h4"></strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {/*<div className="progress-group mb-4">*/}
                  {/*  <div className="progress-group-header">*/}
                  {/*    <CIcon className="progress-group-icon" name="cil-user" />*/}
                  {/*    <span className="title">Male</span>*/}
                  {/*    <span className="ml-auto font-weight-bold">43%</span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="warning" value="43" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="progress-group mb-5">*/}
                  {/*  <div className="progress-group-header">*/}
                  {/*    <CIcon className="progress-group-icon" name="cil-user-female" />*/}
                  {/*    <span className="title">Female</span>*/}
                  {/*    <span className="ml-auto font-weight-bold">37%</span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="warning" value="37" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="progress-group">*/}
                  {/*  <div className="progress-group-header">*/}
                  {/*    <CIcon className="progress-group-icon" name="cil-globe-alt" />*/}
                  {/*    <span className="title">Organic Search</span>*/}
                  {/*    <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="success" value="56" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}


                  {/*<div className="progress-group">*/}
                  {/*  <div className="progress-group-header">*/}
                  {/*    <CIcon name="cib-facebook" className="progress-group-icon" />*/}
                  {/*    <span className="title">Facebook</span>*/}
                  {/*    <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="success" value="15" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="progress-group">*/}
                  {/*  <div className="progress-group-header">*/}
                  {/*    <CIcon name="cib-twitter" className="progress-group-icon" />*/}
                  {/*    <span className="title">Twitter</span>*/}
                  {/*    <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="success" value="11" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="progress-group">*/}
                  {/*  <div className="progress-group-header">*/}
                  {/*    <CIcon name="cib-linkedin" className="progress-group-icon" />*/}
                  {/*    <span className="title">LinkedIn</span>*/}
                  {/*    <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>*/}
                  {/*  </div>*/}
                  {/*  <div className="progress-group-bars">*/}
                  {/*    <CProgress className="progress-xs" color="success" value="8" />*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="divider text-center">*/}
                  {/*  <CButton color="link" size="sm" className="text-muted">*/}
                  {/*    <CIcon name="cil-options" />*/}
                  {/*  </CButton>*/}
                  {/*</div>*/}

                </CCol>
              </CRow>

              <br />
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                {salesTableData && salesTableData.map(sale => {
                  return      <tr key={sale._id.productID}>
                    <td>{sale._id.name}</td>
                    <td>{sale.sold_qty}</td>
                    <td>{sale.total}</td>
                  </tr>
                })}
                </tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
