import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function RecipForDay(){
  const Catagoriespage = useNavigate();
const [Dayrecip , setDayrecip ] = useState(null);
 useEffect(() => {
    async function getrecipe(){
const response = await axios.get(
  `https://www.themealdb.com/api/json/v1/1/random.php`);
 setDayrecip(response.data.meals[0]);

    }


   
getrecipe()}, []);

 function handleclick(){
       Catagoriespage(`/category/${Dayrecip.strCategory}/${Dayrecip.idMeal}`);
    }

    return(
   
        <div style={{position: 'relative' , width : '100%'  , display : 'grid' , gridTemplateColumns: "1fr 1.2fr",  gridTemplateRows: "350px 50px" , gap: '20px', height : '450px' ,border: "1px solid #e0c7b5",
borderRadius: "18px", padding : '25px' , boxSizing: "border-box" , alignItems: "stretch" ,maxWidth: "100%",overflow: "hidden",}}>
            <div style={{height : '100%' , width : '100%' , padding : '12px' , boxSizing: "border-box" , alignItems : 'center' , display: "flex" ,  justifyContent: "center",}}>

            <img style={{ objectPosition: "center" , width : '100%'  , height : '100%' , objectFit : 'cover' , borderRadius : '10px'  }} src={Dayrecip?.strMealThumb}></img>
                        </div>


<div style={{display : 'block'   , padding : '20px' ,  overflowY : 'auto' , backgroundColor : '#fffaf5' ,maxHeight: "100%" ,height: "100%",
minHeight: 0,
boxSizing: "border-box",}}>
    
    <div style={{display : 'flex' , flexDirection : 'row'   ,justifyContent : "initial"  }} >

            <i className="bi bi-star me-2"></i>

            <h4>Recipe of the Day </h4>
    </div>
                 

              <div style={{display : 'flex' , flexDirection : 'row'   ,justifyContent : "center" }}>
                <h2>
                   {Dayrecip?.strMeal}
                </h2>
              </div>

         <div style={{display : 'flex' , flexDirection : 'row'   ,justifyContent : "center" }}>
        <p>  {Dayrecip?.strInstructions}
        </p>

         </div>

      
         <div style={{display : 'flex' , flexDirection : 'row'   ,justifyContent : "center" }}>
                    <i className="bi bi-fork-knife me-2"></i>

 <h5>Category: </h5>
        <h5> {Dayrecip?.strCategory}</h5>
         </div>

       
       <div  style={{display : 'flex' , flexDirection : 'row'   ,justifyContent : "center" }}>
                <i className="bi bi-globe me-2" ></i>
        <h5>Area: </h5>
        <h5> {Dayrecip?.strArea}</h5>

       </div>
        
   


</div>

            <div   style={{display : 'flex' ,  gridColumn: "1 / 3" , flexDirection : 'row'   ,justifyContent : "center" , width : '100%'}} >
      <Button style={{backgroundColor : 'brown'}}  onClick={handleclick}>View Recipe </Button>

      </div>
        </div>

      
        
    )
}