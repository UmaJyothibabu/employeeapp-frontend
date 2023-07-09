import React, { useState } from "react";
import "../Styles/Eform.css";
import { useNavigate } from "react-router-dom";

import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

const Eform = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const showInput = () => {
    console.log(input);
    navigate("/employeeapp-frontend");
  };
  return (
    <Grid>
      <Paper elevation={0} className="paperStyle">
        <Grid align="center">
          <Grid>
            <Typography varient="caption" sx={{ color: "#FC4A9D" }}>
              Please fill this form to add new employee
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <form>
            <TextField
              fullWidth
              sx={{ m: 2 }}
              label="Name"
              name="name"
              variant="standard"
              onChange={inputHandler}
            />
            <br />
            <TextField
              fullWidth
              sx={{ m: 2 }}
              name="designation"
              label="Designation"
              variant="standard"
              onChange={inputHandler}
            />
            <TextField
              fullWidth
              sx={{ m: 2 }}
              name="location"
              label="Location"
              variant="standard"
              onChange={inputHandler}
            />
            <TextField
              fullWidth
              sx={{ m: 2 }}
              name="salary"
              label="Salary"
              variant="standard"
              onChange={inputHandler}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={showInput}
            >
              Register
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Eform;
