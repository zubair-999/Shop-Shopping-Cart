import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/actions/SignupAction";
import {useHistory} from "react-router-dom";
import {cilAddressBook, cilScreenSmartphone} from "@coreui/icons";

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      shop_name: "",
      email: "",
      contact_no: "",
      address: "",
      password: "",
      confirm_password: ""
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
      address: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!")
    }),
    onSubmit: (shop_name, email, password, contact_no, address) => {
      debugger;
      dispatch(signup({ shop_name, email, password, contact_no, address }, () => {
        history.push('/signin')
      }))
    }
  });
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={formik.handleSubmit}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Shop Name"
                      autoComplete="shop_name"
                      name="shop_name"
                      value={formik.values.shop_name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.shop_name && formik.touched.shop_name && (
                      <p>{formik.errors.shop_name}</p>
                    )}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p>{formik.errors.email}</p>
                    )}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cilScreenSmartphone" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Phone Number"
                      autoComplete="contact_no"
                      name="contact_no"
                      value={formik.values.contact_no}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.contact_no && formik.touched.contact_no && (
                      <p>{formik.errors.contact_no}</p>
                    )}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cilAddressBook" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Address"
                      autoComplete="address"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.address && formik.touched.address && (
                      <p>{formik.errors.address}</p>
                    )}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.password && formik.touched.password && (
                      <p>{formik.errors.password}</p>
                    )}
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      name="confirm_password"
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.confirm_password && formik.touched.confirm_password && (
                      <p>{formik.errors.confirm_password}</p>
                    )}
                  </CInputGroup>
                  <CButton
                    color="primary"
                    className="px-4"
                    type="submit"
                    onSubmit={formik.handleSubmit}
                    disabled={!formik.isValid}
                  >
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
