import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import  BeefImg  from '../Imgs/BeefImg.png'
import axios from "axios";
import { useState , useEffect } from "react";
import RecipeModal from '../RecipeModal.js'
export default function CategoryPage() {
const [recipes , setrecipes ] =  useState([])
const { categoryName , idMeal} = useParams();
const [ShowModal , setShowModal ]= useState(false)
const [selectID , setSelectID]= useState(null)
const [Favorite , setFavorite ]= useState([]) 

useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("Favorite")) || [];
  setFavorite(saved);
}, []);
    useEffect(() => {
    async function getrecipe(){
const response = await axios.get(
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
 setrecipes(response.data.meals || []);

    }
getrecipe()}, [categoryName]);


 useEffect(() => {
   if(recipes.length > 0 && idMeal){
    const CardREcipe = document.getElementById(idMeal)

    if(CardREcipe){
       CardREcipe.scrollIntoView ({
        behavior : 'smooth' , block : 'center'
       })
    }
   }

   })
 
   function handleclick(recipe){
    let newFavorites ;
 
     
if (Favorite.some(Favorite => Favorite.idMeal === recipe.idMeal)) {      newFavorites =   (Favorite.filter(Favorite => Favorite.idMeal !== recipe.idMeal))

    }
    else{
      newFavorites =   ([...Favorite , recipe])
    }
    setFavorite(newFavorites)
    localStorage.setItem('Favorite' , JSON.stringify(newFavorites))
   }


  return (
       
    <div style={{width : '100%' , minHeight : '100vh' , backgroundColor : '#fdf2e9'}}>
        <h1 style={{marginTop :'20px'}}>
            {categoryName} Recipes
        </h1>
   
    <div  style={{padding :'30px' ,  width : '100%'  , display : 'grid' ,  gridTemplateColumns: ' 1fr 1fr 1fr ', marginBottom : '20px' , marginTop : '20px' , gap : '20px'   , backgroundColor : '#fdf2e9'}}>

    
{recipes.map((recipe) =>{
    return(
        <div  id={recipe.idMeal} className="CardCatagory" key={recipe.idMeal} style={{ position : 'relative' , width : '100%' , backgroundColor : 'white ' , boxShadow: '5px 5px 0px 0px rgba(0, 0, 0, 0.25)',borderRadius: '8px'}} >
    
    <img src={recipe.strMealThumb} style={{width :'100%' , borderRadius: '8px' , marginTop : '5px' , objectFit : 'cover' , height : '180px'}} ></img>
     <h2>{recipe.strMeal}</h2>
 <h5> The Country is : {recipe.strArea}</h5>
      <Button style={{marginBottom : '3px'}} variant="outline-success" 
      
      onClick={()=> {
       setShowModal(true); 
       setSelectID(recipe);
      }}

      >View Recipe</Button>

    

      <i style={{position : 'absolute' , right : '25px' , bottom : '15px' ,   width: "36px",
  height: "36px",
  borderRadius: "50%",
  border: "1px solid #ddd",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer"
  }} className={Favorite.some(fav => fav.idMeal === recipe.idMeal) ? 'bi bi-star-fill' : 'bi bi-star' }  onClick={() => handleclick(recipe)} ></i>

</div>
    )
} )}


    </div>

    <RecipeModal show={ShowModal} 
    id={selectID} 
    onHide={()=> setShowModal(false)} />
     </div>
  );
}