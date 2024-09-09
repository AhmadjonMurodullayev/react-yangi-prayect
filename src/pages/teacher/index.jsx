{/* <div>
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import GlobalModal from "../../components/modal";

// function Index() {
//   const [open, setOpen] = useState(false);
//   const [form, setForm] = useState({ name: '', year: '', number: '', gruxlar: '' });
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     axios.get('https://special-for-react-data.vercel.app/api/cars')
//       .then(res => {
//         setCars(res.data);
//       })
//       .catch(error => {
//         console.error("Error fetching car data:", error);
//         alert('Failed to fetch car data. Please try again later.');
//       });
//   }, []);

//   const editModal = (item) => {
//     setForm(item);
//     setOpen(true);
//   };

//   const toggle = () => {
//     setOpen(false);
//     setForm({ name: '', year: '', number: '', gruxlar: '' });
//   };

//   const handleSubmit = () => {
//     if (!form.name || !form.year || !form.number || !form.gruxlar) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     if (form.id) {
//       // Update existing car
//       axios.put(`https://special-for-react-data.vercel.app/api/cars/${form.id}`, form)
//         .then(res => {
//           setCars(cars.map(car => (car.id === form.id ? res.data : car)));
//           toggle();
//         })
//         .catch(error => {
//           console.error("Error updating car:", error);
//           alert('Failed to update car. Please try again.');
//         });
//     } else {
//       // Create new car
//       axios.post('https://special-for-react-data.vercel.app/api/cars', form)
//         .then(res => {
//           setCars([...cars, res.data]);
//           toggle();
//         })
//         .catch(error => {
//           console.error("Error creating car:", error);
//           alert('Failed to create car. Please try again.');
//         });
//     }
//   };

//   const deleteCar = (id) => {
//     axios.delete(`https://special-for-react-data.vercel.app/api/cars/${id}`)
//       .then(() => {
//         setCars(cars.filter(car => car.id !== id));
//       })
//       .catch(error => {
//         console.error("Error deleting car:", error);
//         alert('Failed to delete car. Please try again.');
//       });
//   };

//   return (
//     <div className="container">
//       <GlobalModal
//         open={open}
//         toggle={toggle}
//         form={form}
//         setForm={setForm}
//         handleSubmit={handleSubmit}
//         deleteCar={deleteCar}
//       />
//       <div className="row">
//         <div className="col-md-3 my-4">
//           <button className="btn btn-primary" onClick={() => { setForm({ name: '', year: '', number: '', gruxlar: '' }); setOpen(true); }}>Add Car</button>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-8">
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Year</th>
//                 <th>Number</th>
//                 <th>Gruxlar</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cars.map((item, index) => (
//                 <tr key={item.id}>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.year}</td>
//                   <td>{item.number}</td>
//                   <td>{item.gruxlar}</td>
//                   <td>
//                     <button className="btn btn-info" onClick={() => editModal(item)}>
//                       Edit
//                     </button>
//                     <button className="btn btn-danger ms-2" onClick={() => deleteCar(item.id)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Index;
</div> */}

import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function CrudPage() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('https://special-for-react-data.vercel.app/api/users');
    setItems(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://special-for-react-data.vercel.app/api/users/${id}`);
    fetchItems();
  };

  const handleClose = () => setShowModal(false);
  const handleShow = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentItem && currentItem.id) {
      await axios.put(`https://special-for-react-data.vercel.app/api/users/${currentItem.id}`, currentItem);
    } else {
      await axios.post('https://special-for-react-data.vercel.app/api/users', currentItem);
    }
    fetchItems();
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  return (
    <div className="container">
      <h1 className="my-4">Items List</h1>
      <Button variant="primary" onClick={() => handleShow(null)}>
        Add New Item
      </Button>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Number</th>
            <th>Gruxlarim</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td>{item.number}</td>
              <td>{item.gruxlarim}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleShow(item)} className="me-2">
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Item Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{currentItem && currentItem.id ? 'Edit Item' : 'Add Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={currentItem ? currentItem.name : ''}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                name="year"
                value={currentItem ? currentItem.year : ''}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="tel"
                name="number"
                value={currentItem ? currentItem.number : ''}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGruxlarim">
              <Form.Label>Gruxlarim</Form.Label>
              <Form.Control
                type="text"
                name="gruxlarim"
                value={currentItem ? currentItem.gruxlarim : ''}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              {currentItem && currentItem.id ? 'Update Item' : 'Add Item'}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CrudPage;
