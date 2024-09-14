import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { TeacherModal } from '@components';
import { Button } from '@mui/material';

export default function BasicTable() {
  const [rows, setRows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [course, setCourse] = React.useState([]);
  const [update, setUpdate] = React.useState({});

  const editItem = async (item) => {
    try {
      const response = await axios.get("http://localhost:3000/course");
      setCourse(response?.data);
    } catch (err) {
      console.log(err);
    }
    setUpdate(item);
    setOpen(true);
  };

  const deleteItem = async (item) => {
    try {
      await axios.delete(`http://localhost:3000/course/${item.id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/course');
        setRows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
            <TeacherModal open={open} handleClose={handleClose} course={course} update={update} />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">T/r</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Duration</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center"> Actions </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.duration}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <Button variant='contained' color='primary' onClick={() => editItem(row)}>Edit</Button>
              <Button variant='contained' color='secondary' onClick={() => deleteItem(row)}>Delete</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
