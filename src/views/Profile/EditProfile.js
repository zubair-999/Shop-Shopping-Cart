import React, {Fragment, useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import {ProfileAction, ProfileUpdateAction} from "../../redux/actions/ProfileAction";



const EditProfile = ({ history }) => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile)
  const { profileData } = profile;
  useEffect(() => {
    dispatch(ProfileAction());
  }, [dispatch])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: profileData ? profileData : {
      shop_name: "",
      email: "",
      contact_no: "",
      address: "",

      // file: null,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      shop_name: Yup.string()
        .min(2, "Minimum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid Email format")
        .required("Required!"),
      contact_no: Yup.string().required('Required'),
      address: Yup.string()
        .required("Required!"),
      // file: yup.mixed().required()
    }),
    onSubmit: (shop) => {
      debugger;
      dispatch(ProfileUpdateAction({ shop }, () => {
        history.push('/profile')
      }))
    }
  });
  return(
    <Fragment>
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={12} lg={9}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4"><strong>Edit Profile</strong></h2>
                <form onSubmit={formik.handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridShopName">
                      <Form.Label>Shop Name</Form.Label>
                      <Form.Control
                        placeholder="Shop Name"
                        type="text"
                        name="shop_name"
                        value={formik.values.shop_name}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.shop_name && formik.touched.shop_name && (
                        <p>{formik.errors.shop_name}</p>
                      )}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.email && formik.touched.email && (
                        <p>{formik.errors.email}</p>
                      )}
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridContactNumber">
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        placeholder="Contact Number"
                        type="text"
                        name="contact_no"
                        value={formik.values.contact_no}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.contact_no && formik.touched.contact_no && (
                        <p>{formik.errors.contact_no}</p>
                      )}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control as='textarea'
                        placeholder="Address"
                        type="text"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.address && formik.touched.address && (
                        <p>{formik.errors.address}</p>
                      )}
                    </Form.Group>
                  </Form.Row>
                      {/*</Form.Group>*/}
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
                  <Form.Group>
                    <Button
                      type="submit"
                      variant="dark"
                      onSubmit={formik.handleSubmit}
                      disabled={!formik.isValid}
                      size="lg" block>Update</Button>
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
export default EditProfile;
