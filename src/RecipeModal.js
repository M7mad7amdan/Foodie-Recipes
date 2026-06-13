import { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

 
    function RecipeModal(props) {
       const [recipe , setrecipe ] =  useState(null)
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
         useEffect(() => {
  async  function Getrecipe() {
const response = await axios.get(
 `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`);
 setrecipe(response.data.meals[0] );
    }
Getrecipe()}, [props.id]); 
    return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { recipe?.strMeal }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>The Country is :  {recipe?.strCountry}</h4>
        <p>
        { recipe?.strInstructions }
        </p> 

        <ul>
         {Ingredient().map((item) => (
          <li>{item}</li>
        ) )}
        </ul>  

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
); 
    }
   
export default RecipeModal;
