import React, { Fragment, useEffect } from 'react'
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import * as Yup from "yup";
import './IncomeCategory.css'
import {useHistory} from "react-router-dom";
import {
  IncomeCategoryEditAction,
  IncomeCategoryUpdateAction
} from "../../redux/actions/IncomeCategoryAction";

const ExpenseCategoryEdit = ({ match }) => {
  const incategoryId = match.params.id
  const history = useHistory()
  const dispatch = useDispatch()
  const InCategoryEdit = useSelector(state => state.InCategoryEdit)
  const { incategoryedit } = InCategoryEdit
  useEffect(() => {
    dispatch(IncomeCategoryEditAction(incategoryId))
  }, [dispatch, incategoryId])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: incategoryedit ? incategoryedit : {
      name: ""
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Required!"),
    }),
    onSubmit: (name) => {
      dispatch(IncomeCategoryUpdateAction({ name }, incategoryId, () => {
        history.push('/settings/income-category')
      }))
    }
  });
  return (
    <>
      <Container className="expense">
        <Row className='justify-content-md-center'>
          <Col xs={12} md={12} lg={9}>
            <Card>
              <Card.Body>
                <form onSubmit={formik.handleSubmit}>
                  <Form.Group>
                    <Form.Label>Expense Category Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      placeholder="Enter a Category Name"
                    />
                    {formik.errors.name && formik.touched.name && (
                      <p>{formik.errors.name}</p>
                    )}
                  </Form.Group>
                  <div>
                    <Button
                      type="submit"
                      onSubmit={formik.handleSubmit}
                      disabled={!formik.isValid}
                      variant="dark"
                    >
                      Update
                    </Button>
                  </div>
                </form>

              </Card.Body>
            </Card >
          </Col>
        </Row>
      </Container>
    </>

  );
}
export default ExpenseCategoryEdit;

