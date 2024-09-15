  // import * as React from 'react';
  // import Box from '@mui/material/Box';
  // import Modal from '@mui/material/Modal';
  // import Button from '@mui/material/Button';
  // import Typography from '@mui/material/Typography';
  // import { duration, FormControl, TextField } from '@mui/material';
  // import { Field, Form, Formik, ErrorMessage } from "formik";
  // import { courseValidationSchema } from '../../utils/validation';
  // import axios from 'axios';

  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };

  // export default function KeepMountedModal() {
  //   const [form, setForm] = React.useState(
  //     open,
  //     handleClose,
  //     course,
  //     update,
  //   );
  //   const [open, setOpen] = React.useState(false);

  //   const handleOpen = () => setOpen(true);

  //   const handleClose = () => {
  //     setOpen(false);
  //     setForm({ name: '', duration: '', price: '' });
  //   };
  //   const initialValues = {
  //     name: update?.name || "",
  //     duration: update?.course || "",
  //     price: update?.price || ""
  //   };

  //   const handleSubmit = async (values, { setSubmitting }) => {
  //     try {
  //       if (!update.id) {
  //         await axios.post("http://localhost:3000/course", values);
  //       } else {
  //         await axios.put(
  //           `http://localhost:3000/course/${update.id}`,
  //           values
  //         );
  //       }
  //       handleClose(); 
  //       window.location.reload(); 
  //     } catch (error) {
  //       console.error("Error saving data", error);
  //     } finally {
  //       setSubmitting(false); 
  //     }
  //   };

  //   return (
  //     <div>
  //       <Button variant="contained" color="primary" onClick={handleOpen}>
  //         Open Modal
  //       </Button>
  //       <Modal
  //         keepMounted
  //         open={open}
  //         onClose={handleClose}
  //         aria-labelledby="keep-mounted-modal-title"
  //         aria-describedby="keep-mounted-modal-description"
  //       >
  //         <Box sx={style}>
  //           <Typography variant="h6" component="h2">
  //             Add New Course
  //           </Typography>
  //           <Formik 
  //              initialValues={initialValues}
  //              validationSchema={courseValidationSchema}
  //              onSubmit={handleSubmit}
  //              enableReinitialize
  //           >
  //             <Form>
  //               <FormControl>
  //               <Field
  //                 name="name"
  //                 as={TextField}
  //                 type="text"
  //                 fullWidth
  //                 margin="normal"
  //                 variant="outlined"
  //                 label="Name"
  //                 helperText={
  //                   <ErrorMessage
  //                     name="name"
  //                     component="p"
  //                     className="text-red text-[15px]"
  //                   />
  //                 }
  //               />
  //                 <Field
  //                 label="Duration"
  //             name="duration"
  //                 as={TextField}
  //                 type="text"
  //                 fullWidth
  //                 margin="normal"
  //                 variant="outlined"
  //                 helperText={
  //                   <ErrorMessage
  //                     name="duration"
  //                     component="p"
  //                     className="text-red text-[15px]"
  //                   />
  //                 }
  //               />
  //                 <Field
  //                 label="Price"
  //                 name="price"
  //                 as={TextField}
  //                 type="text"
  //                 fullWidth
  //                 margin="normal"
  //                 variant="outlined"
  //                 helperText={
  //                   <ErrorMessage
  //                     name="price"
  //                     component="p"
  //                     className="text-red text-[15px]"
  //                   />
  //                 }
  //               />
  //               </FormControl>
  //             </Form>
  //           </Formik>
  //           {/* <TextField
  //             fullWidth
  //             label="Name"
  //             name="name"
  //             value={form.name}
  //             onChange={handleChange}
  //             margin="normal"
  //           /> */}
  //           {/* <TextField
  //             fullWidth
  //             label="Duration"
  //             name="duration"
  //             value={form.duration}
  //             onChange={handleChange}
  //             margin="normal"
  //           /> */}
  //           {/* <TextField
  //             fullWidth
  //             label="Price"
  //             name="price"
  //             value={form.price}
  //             onChange={handleChange}
  //             margin="normal"
  //           /> */}
  //           <Button
  //             onClick={handleSubmit}
  //             variant="contained"
  //             color="primary"
  //             fullWidth
  //           >
  //             Save
  //           </Button>
  //         </Box>
  //       </Modal>
  //     </div>
  //   );
  // }
  import * as React from 'react';
  import Box from '@mui/material/Box';
  import Modal from '@mui/material/Modal';
  import Button from '@mui/material/Button';
  import Typography from '@mui/material/Typography';
  import { FormControl, TextField } from '@mui/material';
  import { Field, Form, Formik, ErrorMessage } from "formik";
  import { courseValidationSchema } from '../../utils/validation';
  import axios from 'axios';
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  export default function TeacherModal({ open, handleClose, course, update }) {
    const initialValues = {
      name: update?.name || "",
      duration: update?.duration || "",
      price: update?.price || ""
    };
  
    const handleSubmit = async (values, { setSubmitting }) => {
      try {
        if (!update.id) {
          await axios.post("http://localhost:3000/course", values);
        } else {
          await axios.put(
            `http://localhost:3000/course/${update.id}`,
            values
          );
        }
        handleClose();
        // Update the table data without reloading the page
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
          <Typography variant="h6" component="h2">
            {update?.id ? 'Edit Course' : 'Add New Course'}
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={courseValidationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ isSubmitting }) => (
              <Form>
                <FormControl fullWidth>
                  <Field
                    name="name"
                    as={TextField}
                    type="text"
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
                  <Field
                    name="duration"
                    as={TextField}
                    type="text"
                    margin="normal"
                    variant="outlined"
                    label="Duration"
                    helperText={
                      <ErrorMessage
                        name="duration"
                        component="p"
                        className="text-red text-[15px]"
                      />
                    }
                  />
                  <Field
                    name="price"
                    as={TextField}
                    type="text"
                    margin="normal"
                    variant="outlined"
                    label="Price"
                    helperText={
                      <ErrorMessage
                        name="price"
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
                </FormControl>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    );
  }
  