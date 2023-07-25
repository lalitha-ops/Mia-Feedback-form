import React, { useState } from "react";
import LoginLogo from "../../images/Mia.png";
import { Field, Form, Formik } from "formik";
import { LoginInitialValue, LoginSchema } from "../../Schema/LoginSchema";
import ShowError from "../../Common/ShowError";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../../Common/Loader";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const keyValue = "ndkgbsodoqewfbkvadfvoeriwgfqwalkdewbgwaefoqwrwbfq";
  const LoginUser = (payload) => {
    setLoading(true);
    console.log("payload==>", payload);
    localStorage.setItem("mia-useId", keyValue);
    navigate("/MiaPostNpim/feedback/form");
    setLoading(false);
  };
  return (
    <div>
      {loading === true && <Loader />}
      <div className="row mx-0 ">
        <div className="col-md-8 LoginPageBackground" />
        <div className="col-md-4 loginForm">
          <div className="LoginLogoImg">
            <img src={LoginLogo} alt="LoginLogo" width="70px" height="70px" />
            <h5 className="my-3">LOGIN</h5>
          </div>
          <Formik
            initialValues={LoginInitialValue}
            validationSchema={LoginSchema}
            onSubmit={(payload) => LoginUser(payload)}
          >
            <Form className="row g-3">
              <div className="my-1">
                <b>
                  Username <span className="text-danger"> *</span>
                </b>
                <Field
                  placeholder="Username"
                  name="userID"
                  className="GInput"
                  type="text"
                />
                <ShowError name="userID" />
              </div>
              <div className="my-2">
                <b>
                  Password <span className="text-danger"> *</span>
                </b>
                <div className="d-flex">
                  <Field
                    type={passwordShown ? "text" : "password"}
                    placeholder="Password"
                    className="GInput"
                    name="password"
                  />
                  <span className="border-bottom">
                    {passwordShown ? (
                      <FaRegEye
                        size={20}
                        cursor="pointer"
                        onClick={togglePassword}
                        style={{ marginTop: 15 }}
                      />
                    ) : (
                      <FaRegEyeSlash
                        size={20}
                        cursor="pointer"
                        onClick={togglePassword}
                        style={{ marginTop: 15 }}
                      />
                    )}
                  </span>
                </div>
                <ShowError name="password" />
              </div>
              <div className="my-1">
                <b>
                  RSO NAME <span className="text-danger"> *</span>
                </b>
                <Field
                  type="text"
                  className="GInput"
                  placeholder="RSO Name"
                  name="region"
                />
                <ShowError name="region" />
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="CButton">
                  LOGIN
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
