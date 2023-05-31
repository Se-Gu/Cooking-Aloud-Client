import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import {
  useSignIn,
  useAuthUser,
  useAuthHeader,
  useIsAuthenticated,
} from "react-auth-kit";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const baseURL = "http://localhost:8080/api/";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const signIn = useSignIn();
  const classes = useStyles();
  const isAuthenticated = useIsAuthenticated();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const auth = useAuthUser();
  const authHeader = useAuthHeader();
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const response = await axios.post(baseURL + "login", {
        email: email,
        password: password,
      });
      if (response.data.success) {
        signIn({
          token: response.data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: response.data.data,
        });
        nav("/");
      } else {
        setErrorMessage("Invalid email or password");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <Typography component="h1" variant="h5">
          Login Page
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email" // Set input type to "email"
                value={email}
                onChange={handleEmailChange}
                error={!!errorMessage} // Show error style if errorMessage is set
                helperText={errorMessage} // Display error message if errorMessage is set
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
      <Typography>
        Not a user? Register&nbsp;
        <Link to="/register">here</Link>
      </Typography>
    </Container>
  );
};

export default LoginPage;
