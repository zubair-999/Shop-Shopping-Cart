import React, { Fragment, useEffect } from 'react'
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import * as Yup from "yup";
import './ExpenseCategory.css'
import { ExpenseCategoryEditAction, ExpenseCategoryUpdateAction } from '../../redux/actions/ExpenseCategoryAction';
import {useHistory} from "react-router-dom";


const ExpenseCategoryEdit = ({ match }) => {
  const excategoryId = match.params.id
  const history = useHistory()
  const dispatch = useDispatch()
  const ExCategoryEdit = useSelector(state => state.ExCategoryEdit)
  const { excategoryedit } = ExCategoryEdit
  console.log(excategoryedit);
  useEffect(() => {
    dispatch(ExpenseCategoryEditAction(excategoryId))
  }, [dispatch, excategoryId])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: excategoryedit ? excategoryedit : {
      name: ""
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Required!"),
    }),
    onSubmit: (name) => {
      dispatch(ExpenseCategoryUpdateAction({ name }, excategoryId, () => {
        history.push('/settings/expense-category')
      }))
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
    </Fragment>

  );
}
export default ExpenseCategoryEdit;

