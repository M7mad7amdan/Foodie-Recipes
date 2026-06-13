import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Catagories from './Catagories'
import BeefImg from "../Imgs/BeefImg.png";
import ChickenImg from "../Imgs/ChickenImg.png";
import DessertImg from "../Imgs/DessertImg.png";
import SeaFoodImg from "../Imgs/SeaFoodImg.png";
import VegetarianImg from "../Imgs/VegetarianImg.png";
import PopularCatagories from "./PopularCatagories";
import RecipForDay from "./RecipForDay";
import WhyUseUs from "./WhyUseUs";
import { Link } from "react-router-dom";
import { useState  ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function MainPage(){
const searchrecipe = useNavigate() ;
 function handleclcik() {

  if(Search !="")
  {
    searchrecipe(`/search/${Search}`);
  }
  
}

  const [Search , setSearch]= useState("") 
 const [recipes, setRecipes] = useState([]);
const AllTYPE = ['Beef' , 'Chicken' , 'Dessert' , 'Seafood' , 'Vegetarian']
const randomIndex = Math.floor(Math.random() * AllTYPE.length)
const randomCategory  = AllTYPE[randomIndex]

useEffect(() => {
  async function getPopularRecipes() {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${randomCategory}`
    );

    const allRecipes = response.data.meals;

    const randomRecipes = allRecipes
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    setRecipes(randomRecipes);
  }

  getPopularRecipes();
}, []);
  return(
        <div style={{minHeight : '100vh' , width : '100vw' , backgroundColor : '#fdf2e9'}}>
        <div className="MainDiv" style={{display: 'flex', justifyContent : 'center' , alignItems: 'center',
        flexDirection : 'column' }} >
            <div style={{display : 'flex' , flexDirection : 'column'}}>
          <h1 style={{color : 'white ' }}>Discover Delicious Recipes</h1>
          <h3  style={{color : 'white ', }}>Search meals from around the world and find your next favorite dish.</h3>
              </div>

              <div >
   <Form className="d-flex">
            <Form.Control 
           onChange={(e) =>setSearch(e.target.value) }
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleclcik}>Search</Button>
          </Form>
           

            </div>
      
  </div> 
  <div id='Categories' style={{backgroundColor : '#fdf2e9'}}>
            <h1 style={{paddingTop: "20px" , paddingBottom : "20px"}}>
                Explore Categories
            </h1> 

<h3>Choose a category and discover delicious recipes.</h3>

   <div style={{ display: 'flex', flexDirection: 'row' , gap : '10px' , marginLeft : '10px' , marginRight: '10px' , paddingTop: "20px" , paddingBottom : "20px"}}> 

     <Link to="/category/beef" style={{ textDecoration: "none", color: "inherit" }}>
     <Catagories Title='Beef' text='Rich and flavorful beef recipes for hearty meals.'  img={BeefImg} />

     </Link>  


<Link  to="/category/chicken" style={{ textDecoration: "none", color: "inherit" }}>

       <Catagories Title='Chicken' text='Easy chicken dishes for everyday cooking.' img={ChickenImg} />
</Link>

<Link  to="/category/dessert" style={{ textDecoration: "none", color: "inherit" }}>
       <Catagories Title='Dessert' text='Sweet treats and desserts for every occasion.' img={DessertImg} />

</Link>

<Link to="/category/seafood" style={{ textDecoration: "none", color: "inherit" }}>
       <Catagories Title='Seafood' text='Fresh seafood recipes with delicious flavors.'  img={SeaFoodImg} />

</Link >

<Link to="/category/vegetarian" style={{ textDecoration: "none", color: "inherit" }}> 
       <Catagories Title='Vegetarian' text='Healthy vegetarian meals full of fresh ingredients.' img={VegetarianImg} />

</Link>


     </div>


</div> 
  <div id='PopularRecipes' style={{backgroundColor : '#fdf2e9'}}>
            <h1 style={{paddingTop: "20px" , paddingBottom : "20px"}}>
             Popular Recipes
            </h1> 

<h3 style={{marginBottom : '20px' , backgroundColor : '#fdf2e9'}}>Discover some of the most loved meals from around the world.</h3>

   <div style={{gap : '20px' , display : 'flex' , flexDirection : 'row' , width : '100%' , minHeight : '300px' , flexWrap : 'wrap' , backgroundColor : '#fdf2e9' ,justifyContent : 'center' , padding: '0 20px',  boxSizing: 'border-box'}}> 
    
     
        {recipes.map((recipe) => (
  <PopularCatagories id={recipe.idMeal} />
))}
     </div> 
    </div>
 

     <div>
        <RecipForDay></RecipForDay>
     </div>
       

<div> 
<div style={{marginTop : '20px'}}>
    <h1>
Why Use Foodie Recipes?
    </h1>

    <h3>
Simple tools to help you discover and save your favorite meals.
    </h3>
</div>


<div style={{display : "flex" , justifyContent : 'space-evenly' , marginTop : '30px' , gap : '30px'}}>
     

 <WhyUseUs Header='Easy Search ' title='Find Recipes Fast' text='Search by meal name, category, or ingredient and quickly find the recipe you need.' icon= "bi bi-search-heart" />
              <WhyUseUs Header='Global Recipes' title='Meals From Around the World' text='Explore different dishes from many countries and discover new cooking ideas.' icon = 'bi bi-globe' />
       <WhyUseUs  Header='Save Favorites' title='Keep Your Best Recipes' text='Save the recipes you like and come back to them anytime.' icon = 'bi-heart-fill' />
</div >
</div>

      

</div>
        
    )
}