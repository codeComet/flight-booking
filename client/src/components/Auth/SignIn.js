import React, { useState } from "react";
import {
  TextField,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./signin.css";
import { useHistory } from "react-router-dom";
import { signin } from "../../actions/auth";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(values, history));
  };

  return (
    <div className="signin_parent">
      <div className="signin_container">
        <Typography
          variant="h4"
          style={{ marginBottom: "20px", textAlign: "center" }}
        >
          Admin Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            label="email"
            type="email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            value={values.email}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            variant="contained"
            size="large"
            type="submit"
            style={{ width: "100%", marginTop: "20px" }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
