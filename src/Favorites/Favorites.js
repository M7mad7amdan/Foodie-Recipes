import { useParams } from "react-router-dom";
import axios from "axios";
import { useState , useEffect } from "react";
import Button from 'react-bootstrap/Button';
import RecipeModal from '../RecipeModal.js'

export default function Favorites(){
    const { Favorites } = useParams();
    const [Favorite , setFavorite]= useState([])
     const [ShowModal , setShowModal ]= useState(false)
const [selectID , setSelectID]= useState(null)
     useEffect(() => {
   let GetFavorite = localStorage.getItem('Favorite')
   let ConvertGetFavorite = JSON.parse(GetFavorite) || []
   setFavorite(ConvertGetFavorite)
   }, []);
    return(
        <div>
 <h1>Search Results for  {Favorites} </h1>
<div style={{display : 'grid' , gridTemplateColumns : 'repeat(2, 1fr)' , gap : '20px' , padding : '20px'}}>

        {
            Favorite.map((Favorite)=>{
                return(
                       <div  id={Favorite.idMeal} className="CardCatagory" key={Favorite.idMeal} style={{  width : '100%' , backgroundColor : 'white ' , boxShadow: '5px 5px 0px 0px rgba(0, 0, 0, 0.25)',borderRadius: '8px'}} >
    
    <img src={Favorite.strMealThumb} style={{width :'100%' , borderRadius: '8px' , marginTop : '5px' , objectFit : 'cover' , height : '180px'}} />
     <h2>{Favorite.strMeal}</h2>
 <h5> The Country is : {Favorite.strArea}</h5>  

 
            <div   style={{display : 'flex' ,  gridColumn: "1 / 3" , flexDirection : 'row'   ,justifyContent : "center" , width : '100%'}} >
      <Button style={{backgroundColor : 'brown'}}    onClick={()=> {
       setShowModal(true); 
       setSelectID(Favorite.idMeal);
      }} >View Recipe   </Button>   </div>
 </div> 
                )
            }) }
   
    </div>
     <RecipeModal show={ShowModal} 
        id={selectID} 
        onHide={()=> setShowModal(false)} />
        </div>
    )
}