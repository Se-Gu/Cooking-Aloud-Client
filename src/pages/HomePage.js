import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "../css/Home.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Home Image"
          className="home-image"
        />
      </div>
      <div className="content-container">
        <h1 className="title">Welcome to Cooking Aloud</h1>
        <p className="description">
          Discover mouthwatering recipes, search and explore a world of culinary
          delights, and listen to them come alive through the power of
          text-to-speech technology.
        </p>
        <div className="button-container">
          <Button
            component={Link}
            to="/searchpage"
            variant="contained"
            color="primary"
            className="button"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
