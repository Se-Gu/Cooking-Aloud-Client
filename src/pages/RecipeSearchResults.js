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

const RecipeSearchResults = () => {
  const signIn = useSignIn();
  const classes = useStyles();
  const isAuthenticated = useIsAuthenticated();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const auth = useAuthUser();
  const authHeader = useAuthHeader();

  let params = useParams();
  const [results, setResults] = useState();

  const viewRecipe = (rid) => {
    let link = "http://localhost:3000/recipe/" + rid;
    window.location.href = link;
  };

  const fetchResults = async () => {
    const response2 = await axios.get(baseURL + "recipesearch/" + params.query);
    const resultData = response2.data;
    resultData.query = params.query;
    console.log(response2);
    setResults(resultData);
  };
  const fetchFavorites = async () => {
    const response = await axios.get(baseURL + "getfavorite", {
      headers: {
        Authorization: "Bearer " + auth().token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    //console.log(response.data);
  };

  useEffect(() => {
    //console.log(params);

    //const response = fetchFavorites().catch(console.error);
    const response2 = fetchResults().catch(console.error);

    /*const resultData = {
      results: [
        {
          id: 659081,
          title: "Salmon Frittata",
          image: "https://spoonacular.com/recipeImages/659081-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 667701,
          title: "salmon fried rice",
          image: "https://spoonacular.com/recipeImages/667701-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 646512,
          title: "Salmon Caesar Salad",
          image: "https://spoonacular.com/recipeImages/646512-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 659109,
          title: "Salmon Quinoa Risotto",
          image: "https://spoonacular.com/recipeImages/659109-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 659083,
          title: "Salmon In Banana Leaf",
          image: "https://spoonacular.com/recipeImages/659083-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 659062,
          title: "Salmon Cold Noodle Bowl",
          image: "https://spoonacular.com/recipeImages/659062-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 659037,
          title: "Salmon and Broccoli Crepes",
          image: "https://spoonacular.com/recipeImages/659037-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 659092,
          title: "Salmon on Kiwi & Lemon Puree",
          image: "https://spoonacular.com/recipeImages/659092-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 659135,
          title: "Salmon with roasted vegetables",
          image: "https://spoonacular.com/recipeImages/659135-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 659038,
          title: "Salmon and Brown Rice Eggrolls",
          image: "https://spoonacular.com/recipeImages/659038-312x231.jpg",
          imageType: "jpg",
        },
      ],
      offset: 0,
      number: 10,
      totalResults: 79,
    };
    resultData.query = params.query;
    setResults(resultData);*/
  }, []);

  return (
    <div className="search-results-container">
      <h4 className="search-results-title">
        Search results for: {results?.query}
      </h4>
      <div className="search-results-list">
        {results?.results.map((result, index) => (
          <a
            key={result.id}
            className="search-result-item"
            href={`http://localhost:3000/recipedetails/${result.id}`}
          >
            <span className="search-result-title">{result.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearchResults;
