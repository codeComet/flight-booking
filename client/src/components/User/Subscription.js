import React, { useState } from "react";
import {
  Typography,
  Input,
  InputLabel,
  FormControl,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/subscription";
import "./User.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Subscription = () => {
  const dispatch = useDispatch();
  const [subscribeData, setSubscribeData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [snackBar, setSnackBar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(subscribeData));
    clearForm();
    handleSnackBarOpen();
  };

  const clearForm = () => {
    setSubscribeData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBar(false);
  };

  const handleSnackBarOpen = () => setSnackBar(true);

  // Snackbar
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackBarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="sub_parent">
      <Typography variant="body1" className="subscribe_h1">
        Fill out the form to subscribe.
      </Typography>
      <div className="sub_container">
        <form onSubmit={handleSubmit}>
          <FormControl variant="standard" className="subscribe_form">
            <InputLabel htmlFor="component-simple">First Name</InputLabel>
            <Input
              id="component-simple"
              type="text"
              required
              onChange={(e) =>
                setSubscribeData({
                  ...subscribeData,
                  firstName: e.target.value,
                })
              }
              value={subscribeData.firstName}
            />
          </FormControl>
          <FormControl variant="standard" className="subscribe_form">
            <InputLabel htmlFor="component-simple">Last Name</InputLabel>
            <Input
              id="component-simple"
              type="text"
              required
              onChange={(e) =>
                setSubscribeData({
                  ...subscribeData,
                  lastName: e.target.value,
                })
              }
              value={subscribeData.lastName}
            />
          </FormControl>
          <FormControl variant="standard" className="subscribe_form">
            <InputLabel htmlFor="component-simple">Email</InputLabel>
            <Input
              id="component-simple"
              type="email"
              required
              onChange={(e) =>
                setSubscribeData({
                  ...subscribeData,
                  email: e.target.value,
                })
              }
              value={subscribeData.email}
            />
          </FormControl>
          <FormControl variant="standard" className="subscribe_form">
            <InputLabel htmlFor="component-simple">Phone</InputLabel>
            <Input
              id="component-simple"
              type="tel"
              required
              onChange={(e) =>
                setSubscribeData({
                  ...subscribeData,
                  phone: e.target.value,
                })
              }
              value={subscribeData.phone}
            />
          </FormControl>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>

      {/* Snackbar */}
      <div>
        <Snackbar
          open={snackBar}
          autoHideDuration={7000}
          onClose={handleSnackBarClose}
          action={action}
        >
          <Alert onClose={handleSnackBarClose} severity="success">
            Thank you for subscribing.
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Subscription;
