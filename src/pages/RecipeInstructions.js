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
import "../css/RecipeInstructions.css";

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

const RecipeInstructions = () => {
  const signIn = useSignIn();
  const classes = useStyles();
  const isAuthenticated = useIsAuthenticated();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const auth = useAuthUser();
  const authHeader = useAuthHeader();

  let params = useParams();
  const [recipe, setRecipe] = useState();

  const viewInstructions = (rid) => {
    let link = "http://localhost:3000/instructions/" + rid;
    window.location.href = link;
  };

  useEffect(() => {
    //console.log(params);
    const fetchRecipe = async () => {
      const response = await axios.get(baseURL + "recipe/" + params.rid);
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

    const response = fetchFavorites().catch(console.error);
    //const response2 = fetchRecipe().catch(console.error);
    //const recipeData = response2.data;
    const recipeData = {
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true,
      veryHealthy: false,
      cheap: false,
      veryPopular: false,
      sustainable: false,
      lowFodmap: true,
      weightWatcherSmartPoints: 0,
      gaps: "no",
      preparationMinutes: 40,
      cookingMinutes: 4460,
      aggregateLikes: 0,
      healthScore: 47,
      creditsText: "Epicurious",
      sourceName: "Epicurious",
      pricePerServing: 58.44,
      extendedIngredients: [
        {
          id: 15001,
          aisle: "Seafood",
          image: "anchovies.jpg",
          consistency: "SOLID",
          name: "boquerones",
          nameClean: "boquerones",
          original:
            "12 boquerones (white anchovy fillets in vinegar), drained, patted dry, and halved lengthwise",
          originalName:
            "boquerones (white anchovy fillets in vinegar), drained, patted dry, and halved lengthwise",
          amount: 12,
          unit: "",
          meta: [
            "white",
            "dry",
            "halved lengthwise",
            "drained",
            "( anchovy fillets in vinegar)",
          ],
          measures: {
            us: { amount: 12, unitShort: "", unitLong: "" },
            metric: { amount: 12, unitShort: "", unitLong: "" },
          },
        },
        {
          id: 11821,
          aisle: "Produce",
          image: "red-pepper.jpg",
          consistency: "SOLID",
          name: "bell peppers",
          nameClean: "red pepper",
          original: "6 large red bell peppers (3 pounds total)",
          originalName: "red bell peppers (3 pounds total)",
          amount: 6,
          unit: "large",
          meta: ["red", "(3 pounds total)"],
          measures: {
            us: { amount: 6, unitShort: "large", unitLong: "larges" },
            metric: { amount: 6, unitShort: "large", unitLong: "larges" },
          },
        },
        {
          id: 1012068,
          aisle: "Oil, Vinegar, Salad Dressing",
          image: "dark-sauce.jpg",
          consistency: "LIQUID",
          name: "sherry vinegar",
          nameClean: "sherry vinegar",
          original: "1 tablespoon Sherry vinegar",
          originalName: "Sherry vinegar",
          amount: 1,
          unit: "tablespoon",
          meta: [],
          measures: {
            us: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" },
            metric: { amount: 1, unitShort: "Tbsp", unitLong: "Tbsp" },
          },
        },
        {
          id: 19335,
          aisle: "Baking",
          image: "sugar-in-bowl.png",
          consistency: "SOLID",
          name: "sugar",
          nameClean: "sugar",
          original: "1 teaspoon sugar",
          originalName: "sugar",
          amount: 1,
          unit: "teaspoon",
          meta: [],
          measures: {
            us: { amount: 1, unitShort: "tsp", unitLong: "teaspoon" },
            metric: { amount: 1, unitShort: "tsp", unitLong: "teaspoon" },
          },
        },
      ],
      id: 12,
      title: "Roasted Peppers with Boquerones",
      readyInMinutes: 4500,
      servings: 12,
      sourceUrl:
        "http://www.epicurious.com/recipes/food/views/Roasted-Peppers-with-Boquerones-231380",
      image: "https://spoonacular.com/recipeImages/12-556x370.jpg",
      imageType: "jpg",
      summary:
        'Roasted Peppers with Boquerones takes approximately <b>75 hours</b> from beginning to end. This recipe serves 12. Watching your figure? This gluten free, dairy free, fodmap friendly, and pescatarian recipe has <b>28 calories</b>, <b>2g of protein</b>, and <b>0g of fat</b> per serving. For <b>58 cents per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. If you have boquerones, bell peppers, sherry vinegar, and a few other ingredients on hand, you can make it. It works well as a side dish. 1 person were impressed by this recipe. It is brought to you by Epicurious. Overall, this recipe earns a <b>great spoonacular score of 81%</b>. Similar recipes include <a href="https://spoonacular.com/recipes/marinated-boquerones-10">Marinated Boquerones</a>, <a href="https://spoonacular.com/recipes/boquerones-with-green-olives-and-orange-1765635">Boquerones With Green Olives and Orange</a>, and <a href="https://spoonacular.com/recipes/tomato-and-boquerones-salad-with-garlicky-breadcrumbs-49">Tomato And Boquerones Salad With Garlicky Breadcrumbs</a>.',
      cuisines: [],
      dishTypes: ["side dish"],
      diets: ["gluten free", "dairy free", "fodmap friendly", "pescatarian"],
      occasions: [],
      winePairing: { pairedWines: [], pairingText: "", productMatches: [] },
      instructions:
        "Preparation                                                        Preheat broiler.                                                                Broil bell peppers on a broiler pan about 5 inches from heat, turning occasionally with tongs, until skins are blackened, 15 to 20 minutes. Transfer to a large bowl and cover bowl tightly with plastic wrap, then let steam 20 minutes.                                                                When peppers are cool enough to handle, peel them, reserving all juices in bowl, and discard stems and seeds. Cut peppers lengthwise into 1/4-inch-wide strips. Pour pepper juices through a sieve into another bowl, then add vinegar and sugar to juices, stirring until sugar is dissolved, then stir in peppers. Marinate peppers at room temperature, stirring occasionally, at least 2 hours.                                                                Spoon peppers and juices into a shallow bowl and arrange anchovy strips decoratively on top.                                                Cooks' note:            Peppers can marinate (without anchovies), covered and chilled, up to 3 days. Bring to room temperature before serving.",
      analyzedInstructions: [
        {
          name: "",
          steps: [
            {
              number: 1,
              step: "Preheat broiler.",
              ingredients: [],
              equipment: [
                {
                  id: 405914,
                  name: "broiler",
                  localizedName: "broiler",
                  image: "oven.jpg",
                },
              ],
            },
            {
              number: 2,
              step: "Broil bell peppers on a broiler pan about 5 inches from heat, turning occasionally with tongs, until skins are blackened, 15 to 20 minutes.",
              ingredients: [
                {
                  id: 10211821,
                  name: "bell pepper",
                  localizedName: "bell pepper",
                  image: "bell-pepper-orange.png",
                },
              ],
              equipment: [
                {
                  id: 404698,
                  name: "broiler pan",
                  localizedName: "broiler pan",
                  image: "broiler-pan.jpg",
                },
                {
                  id: 404641,
                  name: "tongs",
                  localizedName: "tongs",
                  image: "tongs.jpg",
                },
              ],
              length: { number: 15, unit: "minutes" },
            },
            {
              number: 3,
              step: "Transfer to a large bowl and cover bowl tightly with plastic wrap, then let steam 20 minutes.",
              ingredients: [
                {
                  id: 10018364,
                  name: "wrap",
                  localizedName: "wrap",
                  image: "flour-tortilla.jpg",
                },
              ],
              equipment: [
                {
                  id: 404730,
                  name: "plastic wrap",
                  localizedName: "plastic wrap",
                  image: "plastic-wrap.jpg",
                },
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg",
                },
              ],
              length: { number: 20, unit: "minutes" },
            },
            {
              number: 4,
              step: "When peppers are cool enough to handle, peel them, reserving all juices in bowl, and discard stems and seeds.",
              ingredients: [
                {
                  id: 10111333,
                  name: "peppers",
                  localizedName: "peppers",
                  image: "green-pepper.jpg",
                },
                {
                  id: 93818,
                  name: "seeds",
                  localizedName: "seeds",
                  image: "sunflower-seeds.jpg",
                },
              ],
              equipment: [
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg",
                },
              ],
            },
            {
              number: 5,
              step: "Cut peppers lengthwise into 1/4-inch-wide strips.",
              ingredients: [
                {
                  id: 10111333,
                  name: "peppers",
                  localizedName: "peppers",
                  image: "green-pepper.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 6,
              step: "Pour pepper juices through a sieve into another bowl, then add vinegar and sugar to juices, stirring until sugar is dissolved, then stir in peppers. Marinate peppers at room temperature, stirring occasionally, at least 2 hours.",
              ingredients: [
                {
                  id: 10111333,
                  name: "peppers",
                  localizedName: "peppers",
                  image: "green-pepper.jpg",
                },
                {
                  id: 2053,
                  name: "vinegar",
                  localizedName: "vinegar",
                  image: "vinegar-(white).jpg",
                },
                {
                  id: 1002030,
                  name: "pepper",
                  localizedName: "pepper",
                  image: "pepper.jpg",
                },
                {
                  id: 19335,
                  name: "sugar",
                  localizedName: "sugar",
                  image: "sugar-in-bowl.png",
                },
              ],
              equipment: [
                {
                  id: 405600,
                  name: "sieve",
                  localizedName: "sieve",
                  image: "strainer.png",
                },
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg",
                },
              ],
              length: { number: 120, unit: "minutes" },
            },
            {
              number: 7,
              step: "Spoon peppers and juices into a shallow bowl and arrange anchovy strips decoratively on top.",
              ingredients: [
                {
                  id: 15001,
                  name: "anchovies",
                  localizedName: "anchovies",
                  image: "anchovies.jpg",
                },
                {
                  id: 10111333,
                  name: "peppers",
                  localizedName: "peppers",
                  image: "green-pepper.jpg",
                },
              ],
              equipment: [
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg",
                },
              ],
            },
          ],
        },
        {
          name: "Cooks' note",
          steps: [
            {
              number: 1,
              step: "Peppers can marinate (without anchovies), covered and chilled, up to 3 days. Bring to room temperature before serving.",
              ingredients: [
                {
                  id: 15001,
                  name: "anchovies",
                  localizedName: "anchovies",
                  image: "anchovies.jpg",
                },
                {
                  id: 10111333,
                  name: "peppers",
                  localizedName: "peppers",
                  image: "green-pepper.jpg",
                },
              ],
              equipment: [],
            },
          ],
        },
      ],
      originalId: null,
    };
    console.log(recipeData.analyzedInstructions[0].steps);
    setRecipe(recipeData);
  }, []);

  return (
    <div className="recipe-instructions-container">
      <h4 className="recipe-instructions-title">{recipe?.title}</h4>
      <img
        className="recipe-instructions-image"
        src={recipe?.image}
        alt="Recipe"
      />
      <div className="recipe-instructions-steps">
        {recipe?.analyzedInstructions[0].steps.map((step, index) => (
          <div className="recipe-instructions-step" key={index}>
            <span className="recipe-instructions-step-number">
              Step {step.number}:
            </span>
            <span className="recipe-instructions-step-text">{step.step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeInstructions;
