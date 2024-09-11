import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TeacherTable, TeacherModal } from '@components'; // Ensure correct path
import Button from '@mui/material/Button'; // Adjust import based on the library you use

const Index = () => {
  const [data, setData] = useState([]);
  const [course, setCours] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/teacher")
      .then(res => {
        setData(res?.data);
      })
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const openModal = async()=>{
    await  axios.get('http://localhost:3000/course').then(res=>{
     setCours(res?.data)
    })
    setOpen(true)
  }

  return (
    <div>
      <TeacherModal open={open} handleClose={handleClose} course={course} />
      <Button onClick={() => openModal(true)} variant="contained" color="primary">
        Open Modal
      </Button>
      <TeacherTable data={data} />
    </div>
  );
};

export default Index;
