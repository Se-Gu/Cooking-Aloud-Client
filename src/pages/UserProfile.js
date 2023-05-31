import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
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
import "../css/SearchResults.css";

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

const UserProfile = () => {
  const signIn = useSignIn();
  const classes = useStyles();
  const isAuthenticated = useIsAuthenticated();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const auth = useAuthUser();
  const authHeader = useAuthHeader();

  let params = useParams();
  const [favorites, setFavorites] = useState();

  const viewRecipe = (rid) => {
    let link = "http://localhost:3000/recipe/" + rid;
    window.location.href = link;
  };

  const fetchFavorites = async () => {
    const response = await axios.get(baseURL + "getfavorite", {
      headers: {
        Authorization: "Bearer " + auth().token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    setFavorites(response.data.data.favmeals)
    console.log(response.data.data.favmeals);
  };

  useEffect(() => {
    //console.log(params);

    const response = fetchFavorites().catch(console.error);
    //const response2 = fetchResults().catch(console.error);

  }, []);

  return (
    <div className="search-results-container">
      <h4 className="search-results-title">
        Favorite Meals
      </h4>
      <div className="search-results-list">
        {favorites?.map((recipe, index) => (
          <a
            key={recipe.mealid}
            className="search-result-item"
            href={`http://localhost:3000/recipedetails/${recipe.mealid}`}
          >
            <span className="search-result-title">{recipe.mealtitle}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
