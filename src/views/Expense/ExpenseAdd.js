import React, { Fragment, useEffect } from 'react'
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import * as Yup from "yup";
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import './Expense.css'
import {ExpensesSaveAction} from "../../redux/actions/ExpenseAction";
import {ExpenseCategoryTabelAction} from "../../redux/actions/ExpenseCategoryAction";

const Expenses = ({history}) => {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(ExpenseCategoryTabelAction())
  },[dispatch])
  const ExCategoryList = useSelector(state => state.ExCategoryList)
  const { excategories } = ExCategoryList
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      date: "",
      category: "",
      quantity: "",
      total_amount: ""
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      category: Yup.string()
        .required("Required!"),
      quantity: Yup.number()
        .required("Required!"),
      total_amount: Yup.number()
        .required("Required!"),
      date: Yup.date().required('Required').nullable()
    }),
    onSubmit: (date, category, quantity, total_amount) => {
      dispatch(ExpensesSaveAction({ date, category, quantity, total_amount }))
      history.push('/account/expense')
    }
  });
  return (
    <Fragment>
      <Container className="expenses">
        <Row className='justify-content-md-center'>
          <Col xs={12} md={12} lg={9}>
            <Card>
              <Card.Body>
                <form onSubmit={formik.handleSubmit}>
                  <Form.Group>
                    <Form.Label>Date</Form.Label>
                    < Form.Control
                      type="date"
                      name="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.date && formik.touched.date && (
                      <p>{formik.errors.date}</p>
                    )}
                  </Form.Group>

                  <Form.Group >
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select"
                                  name="category"
                                  value={formik.values.category}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  placeholder="Select a category"
                    >
                      <option value="" label="Select an option " />
                      {excategories.map(category => {
                        return <option value={category._id} label={category.name} />
                      })}
                    </Form.Control>
                    {formik.errors.category && formik.touched.category && (
                      <p>{formik.errors.category}</p>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      name="quantity"
                      value={formik.values.quantity}
                      onChange={formik.handleChange}
                      placeholder="Enter a quantity"
                    />
                    {formik.errors.quantity && formik.touched.quantity && (
                      <p>{formik.errors.quantity}</p>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Total Amount</Form.Label>
                    <Form.Control
                      type="number"
                      name="total_amount"
                      value={formik.values.total_amount}
                      onChange={formik.handleChange}
                      placeholder="Enter a Total Amount"
                    />
                    {formik.errors.total_amount && formik.touched.total_amount && (
                      <p>{formik.errors.total_amount}</p>
                    )}
                  </Form.Group>
                  <div>
                    <Button
                      type="submit"
                      onSubmit={formik.handleSubmit}
                      disabled={!formik.isValid}
                      variant="dark">Save</Button>
                  </div>
                </form>

              </Card.Body>
            </Card >
          </Col>
        </Row>
      </Container>
    </Fragment >

  );
}
export default Expenses;

