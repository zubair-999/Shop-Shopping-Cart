import React, {Fragment} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import {useDispatch} from "react-redux";
//import * as yup from "yup";
import {ProductAddAction} from "../../redux/actions/ProductFunAction";

const AddNewProduct = ({ history, setFieldValue }) => {
  const dispatch = useDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      stock: "",
      category: "",
      description:"",
      // file: null,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Minimum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      price: Yup.number()
        .required("Required!"),
      stock: Yup.number()
        .required("Required!"),
      category: Yup.string().required('Required'),
      description: Yup.string().required("Required!"),
      // file: yup.mixed().required()
    }),
    onSubmit: (name,price, stock, category, description) => {
      dispatch(ProductAddAction({ name, price, stock, category, description }, () => {
      }))
      history.push('/products/all-products')
    }
  });
  return (
    <Fragment>
      <Container style={{marginTop:'30px'}}>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={12} lg={9}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4"><strong>Add New Product</strong></h2>
                <form onSubmit={formik.handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridProductName">
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control
                        placeholder="Product Name"
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.name && formik.touched.name && (
                        <p>{formik.errors.name}</p>
                      )}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPrice">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        placeholder="Price"
                        type="number"
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.price && formik.touched.price && (
                        <p>{formik.errors.price}</p>
                      )}
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridStock">
                      <Form.Label>Stock</Form.Label>
                      <Form.Control
                        placeholder="Stock"
                        type="number"
                        name="stock"
                        value={formik.values.stock}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.stock && formik.touched.stock && (
                        <p>{formik.errors.stock}</p>
                      )}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCategory">
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        placeholder="Category"
                        type="text"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.category && formik.touched.category && (
                        <p>{formik.errors.category}</p>
                      )}
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridSize">
                      <Form.Label>Description</Form.Label>
                      <Form.Control as='textarea'
                                    placeholder="Description"
                                    type="text"
                                    name="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                      >
                      </Form.Control>
                      {formik.errors.description && formik.touched.description && (
                        <p>{formik.errors.description}</p>
                      )}
                    </Form.Group>
                    {/*<Form.Group as={Col} controlId="formGridFile">*/}
                    {/*    <Form.Label>Image</Form.Label>*/}
                    {/*    <Form.Control*/}
                    {/*        placeholder="Image"*/}
                    {/*        type="file"*/}
                    {/*        name="file"*/}
                    {/*        value={formik.values.file}*/}
                    {/*        onChange={(event) => {*/}
                    {/*            setFieldValue("file", event.currentTarget.files[0]);*/}
                    {/*        }} className="form-control" />*/}
                    {/*    <Thumb file={values.file} />*/}
                    {/*    />*/}
                    {/*    {formik.errors.file && formik.touched.file && (*/}
                    {/*        <p>{formik.errors.file}</p>*/}
                    {/*    )}*/}
                    {/*</Form.Group>*/}
                  </Form.Row>
                  <Form.Group>
                    <Button
                      type="submit"
                      variant="dark"
                      onSubmit={formik.handleSubmit}
                      disabled={!formik.isValid}
                      size="lg" block>Add</Button>
                  </Form.Group>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
export default AddNewProduct;

