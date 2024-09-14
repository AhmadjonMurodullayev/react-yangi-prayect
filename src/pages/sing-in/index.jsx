// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import Natification from "../utils/notifixation";
// import { TextField } from "@mui/material";
// import { Commet } from "react-loading-indicators";
// import { Field, Formik } from "formik";
// import { Button } from "bootstrap";
// // import { FourSquare } from 'react-loading-indicators';

// const Index = () => {
//   const navigate = useNavigate();
//   const initialValues = {
//     name: "",
//     password: "",
//   };
//   const signInValidationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     password: Yup.string()
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
//         "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter"
//       )
//       .required("Password is required"),
//   });

//   const handleSubmit = async (values) => {
//     console.log(values);
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//       <ToastContainer />
//       {isLoading ? (
//         <div className="loader-container">
//           <Commet color="#32cd32" size="large" text="" />
//         </div>
//       ) : (
//         <div
//           className="card shadow-lg border-0"
//           style={{ maxWidth: "400px", width: "100%" }}
//         >
//           <div className="card-body p-4">
//             <h4 className="card-title text-center mb-4">Login</h4>
//             <Formik
//               initialValues={initialValues}
//               onSubmit={handleSubmit}
//               validationSchema={signInvalidationSchema}
//             >
//               <Form id="sign-in">
//                 <Field
//                  name='name'
//                  as={TextField}
//                  type="text"
//                  fullWidth
//                  margin="normal"
//                  variant="outlined"
//                  label="name"
//                  />

//               <Field
//               name= 'password'
//               as={TextField}
//               type="password"
//               />
//               </Form>

//             </Formik>
//           </div>
//           <div className="card-footer d-flex justify-between">

//  <Button>Save</Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Index;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TextField, Button, CircularProgress } from "@mui/material";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Commet } from "react-loading-indicators"; 

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: "",
    password: "",
  };

  const signInValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter"
      )
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    if(values.name === "admin"){
      navigate("/admin-layout")
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <ToastContainer />
      {isLoading ? (
        <div className="loader-container">
          <Commet color="#32cd32" size="large" text="" />
        </div>
      ) : (
        <div
          className="card shadow-lg border-0"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <div className="card-body p-4">
            <h4 className="card-title text-center mb-4">Login</h4>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={signInValidationSchema}
            >
              {({ errors, touched }) => (
                <Form id="sign-in">
                  <Field
                    name="name"
                    as={TextField}
                    type="text"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Name"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <Field
                    name="password"
                    as={TextField}
                    type="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Password"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: "16px" }}
                    disabled={isLoading}
                  > 
                  
                    {isLoading ? <CircularProgress size={24} /> : "Login"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="card-footer d-flex justify-between">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/some-other-route")}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
