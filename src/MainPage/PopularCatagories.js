import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useState , useEffect } from 'react';
function Popularcatagories(props) {
  const [recipe , setrecipe ] =  useState(null)
        useEffect(() => {
  async  function Getrecipe() {
const response = await axios.get(
 `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`);
 setrecipe(response.data.meals[0] );
    }
Getrecipe()}, [props.id]); 
    function Ingredient(){
      if (!recipe) return [];

  let result = [];
      for(let i =1 ; i<= 20; i++ ){
        let   ingredient = recipe[`strIngredient${i}`]
          let  measure = recipe[`strMeasure${i}`]
            if(ingredient  && ingredient.trim() !== "")
            {
               result.push(`${ingredient} --> ${measure}`) 
            }

      }
return result 
    }

return (
    
          <div style={{width : '45%' , height : '360px', perspective : '1000px' , marginBottom : '30px'  , perspective: '1000px'}} className='PopularcatagoriesDiv'>
        <div className='PopularcatagoriesDiv-inner' style={{height : '100%' ,width : '100%'}}>

        <div className='PopularcatagoriesDiv-front'>

  <Card style={{height : '100%' , backgroundColor : 'white' ,  borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}>
            <Card.Img style={{height : '280px' , objectFit : 'cover' }} variant="top" src={recipe?.strMealThumb} />
            <Card.Body>
              <Card.Title>{recipe?.strMeal}</Card.Title>
              <Card.Text>
               {recipe?.strArea}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
         
         <div className="PopularcatagoriesDiv-back" style={{width : '100%' , height : '100%'  }}>
  <Card style={{height : '100%'}}>
      <Card.Body style={{overflowY: "auto", height: "100%" }}>
        <Card.Title>{recipe?.strMeal}</Card.Title>
        <Card.Text>
           {recipe?.strInstructions}
        </Card.Text>
         <ul>
         {Ingredient().map((item) => (
          <li>{item}</li>
        ) )}
        </ul>  
      </Card.Body>
    </Card>   
     </div> 
        
 </div> 

 </div> 
        
  );
}

export default Popularcatagories;