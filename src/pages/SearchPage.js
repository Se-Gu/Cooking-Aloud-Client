import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import { useSignIn, useAuthUser, useAuthHeader, useIsAuthenticated } from "react-auth-kit";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const baseURL = "http://localhost:8080/api/"

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

const SearchPage = () => {
	const signIn = useSignIn();
	const classes = useStyles();
	const isAuthenticated = useIsAuthenticated();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const nav = useNavigate();
	const auth = useAuthUser();
	const authHeader = useAuthHeader();

  const fetchData = async () => {
		const response = await axios.get(
			baseURL + "getfavorite", 
			{headers: {'Authorization': 'Bearer ' + auth().token,
			'Accept' : 'application/json',
			'Content-Type': 'application/json'}}
		);
		console.log(response.data);
		}
  
	useEffect(() =>{
		const response = fetchData().catch(console.error);

  },[])


	

  return (
   <form action="/search" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
  );
};

export default SearchPage;



