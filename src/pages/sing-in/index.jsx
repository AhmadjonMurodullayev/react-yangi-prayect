import TextField from "@mui/material/TextField";
import { Button } from "bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const index = () => {
  const [from, setForm] = useState({});
  const navigate = useNavigate()
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...from, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.username === "admin"){
        navigate("/admin-layout")
    }else if(form.username === "student"){
      navigate("/student-layout")
    }else{
      alert("parol xato  qayta urinib kuring")
    }
  };
  const notify = () => toast("Wow so easy!");

  return (
    <div className="container">
         <ToastContainer />
      <div className="row">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <Typography variant="h4">
                Sing In
              </Typography>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} id="form">
                <TextField
                  fullWidth
                  label="username"
                  id="username"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  sx={{ marginTop: "10px" }}
                  label="password"
                  id="passsword"
                  onChange={handleChange}
                />
              </form>
            </div>
            <div className="card-footer">
              <Button variant="countained" color="primary" type="submit" form="form">
                save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
