


// import * as React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import { Button, TextField } from "@mui/material";
// import axios from "axios";
// import { teacherValidationSchema } from "../../utils/validation";
// import { Field, Form, Formik, ErrorMessage } from "formik";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// export default function KeepMountedModal({
//   open,
//   handleClose,
//   course,
//   update,
// }) {
//   const initialValues = {
//     name: update?.name || "",
//     course: update?.course || "",
//   };

//   const handleSubmit = async (values) => {
//     try {
//       if (!update.id) {
//         await axios.post("http://localhost:3000/teacher", values);
//       } else {
//         await axios.put(
//           `http://localhost:3000/teacher/${update.id}`,
//           values
//         );
//       }
//       handleClose();
//       window.location.reload(); 
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Modal
//       keepMounted
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="keep-mounted-modal-title"
//       aria-describedby="keep-mounted-modal-description"
//     >
//       <Box sx={style}>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={teacherValidationSchema}
//           onSubmit={handleSubmit}
//           enableReinitialize
//         >
//           <Form>
//             <FormControl fullWidth className="mb-3">
//               <InputLabel id="course-select-label">Course</InputLabel>
//               <Field
//                 as={Select}
//                 labelId="course-select-label"
//                 name="course"
//                 label="Course"
//                 fullWidth
//                 margin="normal"
//                 variant="outlined"
//               >
//                 {course?.map((item) => (
//                   <MenuItem value={item.id} key={item.id}>
//                     {item.name}
//                   </MenuItem>
//                 ))}
//               </Field>
//               <ErrorMessage
//                 name="course"
//                 component="p"
//                 className="text-red text-[15px]"
//               />
//             </FormControl>
//             <Field
//               name="name"
//               as={TextField}
//               type="text"
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               label="Name"
//               helperText={
//                 <ErrorMessage
//                   name="name"
//                   component="p"
//                   className="text-red text-[15px]"
//                 />
//               }
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//             >
//               Save
//             </Button>
//           </Form>
//         </Formik>
//       </Box>
//     </Modal>
//   );
// }


import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { teacherValidationSchema } from "../../utils/validation";
import { Field, Form, Formik, ErrorMessage } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({
  open,
  handleClose,
  course,
  update,
}) {
  const initialValues = {
    name: update?.name || "",
    course: update?.course || "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (!update.id) {
        await axios.post("http://localhost:3000/teacher", values);
      } else {
        await axios.put(
          `http://localhost:3000/teacher/${update.id}`,
          values
        );
      }
      handleClose(); 
      window.location.reload(); 
    } catch (error) {
      console.error("Error saving data", error);
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Formik
          initialValues={initialValues}
          validationSchema={teacherValidationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <Form>
              <FormControl fullWidth className="mb-3">
                <InputLabel id="course-select-label">Course</InputLabel>
                <Field
                  as={Select}
                  labelId="course-select-label"
                  name="course"
                  label="Course"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                >
                  {course?.map((item) => (
                    <MenuItem value={item.id} key={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Field>
                <ErrorMessage
                  name="course"
                  component="p"
                  className="text-red text-[15px]"
                />
              </FormControl>
              <Field
                name="name"
                as={TextField}
                type="text"
                fullWidth
                margin="normal"
                variant="outlined"
                label="Name"
                helperText={
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red text-[15px]"
                  />
                }
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}
