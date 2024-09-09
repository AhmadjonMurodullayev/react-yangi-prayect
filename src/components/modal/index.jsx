
// <div>
// // import React, { useEffect } from "react";
// // import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

// // const GlobalModal = ({ form, setForm, open, toggle, handleSubmit, deleteCar }) => {
// //   useEffect(() => {
// //     // Reset form state for new entry
// //     setForm(form.id ? form : { name: '', year: '', number: '', gruxlar: '' });
// //   }, [form, setForm]);

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     setForm(prevForm => ({ ...prevForm, [name]: value }));
// //   };

// //   const handleSubmitForm = (event) => {
// //     event.preventDefault();
// //     handleSubmit(); // Call handleSubmit from parent
// //   };

// //   const handleDelete = () => {
// //     if (form.id) {
// //       deleteCar(form.id);
// //       toggle(); // Close modal after deletion
// //     }
// //   };

// //   return (
// //     <Modal isOpen={open} toggle={toggle} className="modal-dialog-centered">
// //       <ModalHeader toggle={toggle}>
// //         <h2>{form.id ? "Edit Car" : "Add Car"}</h2>
// //       </ModalHeader>
// //       <ModalBody>
// //         <form onSubmit={handleSubmitForm} id="form">
// //           <input
// //             value={form.name || ""}
// //             type="text"
// //             name="name"
// //             placeholder="Name"
// //             onChange={handleChange}
// //             className="form-control my-2"
// //           />
// //           <input
// //             value={form.year || ""}
// //             type="number"
// //             name="year"
// //             placeholder="Year"
// //             onChange={handleChange}
// //             className="form-control my-2"
// //           />
// //           <input
// //             value={form.number || ""}
// //             type="text"
// //             name="number"
// //             placeholder="Number"
// //             onChange={handleChange}
// //             className="form-control my-2"
// //           />
// //           <input
// //             value={form.gruxlar || ""}
// //             type="text"
// //             name="gruxlar"
// //             placeholder="Gruxlar"
// //             onChange={handleChange}
// //             className="form-control my-2"
// //           />
// //         </form>
// //       </ModalBody>
// //       <ModalFooter>
// //         {form.id && (
// //           <button className="btn btn-danger" onClick={handleDelete}>
// //             Delete
// //           </button>
// //         )}
// //         <button className="btn btn-success" form="form" type="submit">
// //           Save
// //         </button>
// //       </ModalFooter>
// //     </Modal>
// //   );
// // };

// // export default GlobalModal;
// </div>

import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function ItemModal({ show, handleClose, item, onSave }) {
  const [formData, setFormData] = useState(item || { name: '', year: '', number: '', gruxlarim: '' });

  useEffect(() => {
    setFormData(item || { name: '', year: '', number: '', gruxlarim: '' });
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (item && item.id) {
      await axios.put(`https://special-for-react-data.vercel.app/api/users/${item.id}`, formData);
    } else {
      await axios.post('https://special-for-react-data.vercel.app/api/users', formData);
    }
    onSave();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item && item.id ? 'Edit Item' : 'Add Item'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="formYear">
            <Form.Label>Year</Form.Label>
            <Form.Control type="number" name="year" value={formData.year} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="formNumber">
            <Form.Label>Number</Form.Label>
            <Form.Control type="tel" name="number" value={formData.number} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="formGruxlarim">
            <Form.Label>Gruxlarim</Form.Label>
            <Form.Control type="text" name="gruxlarim" value={formData.gruxlarim} onChange={handleChange} required />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            {item && item.id ? 'Update Item' : 'Add Item'}
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ItemModal;
