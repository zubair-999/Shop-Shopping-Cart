import React, { Fragment } from 'react'
import { useFormik } from "formik";
import { useDispatch } from 'react-redux'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import * as Yup from "yup";
import './IncomeCategory.css'
import {useHistory} from "react-router-dom";
import {IncomeCategorySaveAction} from "../../redux/actions/IncomeCategoryAction";

const ExpenseCategoryAdd = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Required!"),
    }),
    onSubmit: (name) => {
      dispatch(IncomeCategorySaveAction(name))
      history.push('/settings/income-category')
    }
  });
  return (
    <Fragment>
      <Container className="expense">
        <Row className='justify-content-md-center'>
          <Col xs={12} md={12} lg={9}>
            <Card>
              <Card.Body>
                <form onSubmit={formik.handleSubmit}>
                  <Form.Group>
                    <Form.Label>Income Category Name</Form.Label>
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
                      variant="dark">Add</Button>
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
export default ExpenseCategoryAdd;

