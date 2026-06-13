import { useParams } from "react-router-dom"
import { useState , useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import RecipeModal from '../RecipeModal.js'

export default function SearchPage(){
    const [result , setresult] = useState([])
    const { searchName } = useParams();
 const [ShowModal , setShowModal ]= useState(false)
const [selectID , setSelectID]= useState(null)

    function handleclick(){

    }
     useEffect(() => {
  async  function Getresult() {
const response = await axios.get(
 `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`);
 setresult(response.data.meals || [] );
    }
Getresult()}, [searchName]); 
    return(
       
     <div>
      <h1>Search Results for  {searchName} </h1>
<div style={{display : 'grid' , gridTemplateColumns : 'repeat(2, 1fr)' , gap : '20px' , padding : '20px'}}>

        {
            result.map((result)=>{
                return(
                       <div  id={result.idMeal} className="CardCatagory" key={result.idMeal} style={{  width : '100%' , backgroundColor : 'white ' , boxShadow: '5px 5px 0px 0px rgba(0, 0, 0, 0.25)',borderRadius: '8px'}} >
    
    <img src={result.strMealThumb} style={{width :'100%' , borderRadius: '8px' , marginTop : '5px' , objectFit : 'cover' , height : '180px'}} />
     <h2>{result.strMeal}</h2>
 <h5> The Country is : {result.strArea}</h5>  

 
            <div   style={{display : 'flex' ,  gridColumn: "1 / 3" , flexDirection : 'row'   ,justifyContent : "center" , width : '100%'}} >
      <Button style={{backgroundColor : 'brown'}}    onClick={()=> {
       setShowModal(true); 
       setSelectID(result.idMeal);
      }} >View Recipe   </Button>   </div>
 </div> 
                )
            }) }
   
    </div>
    <RecipeModal show={ShowModal} 
    id={selectID} 
    onHide={()=> setShowModal(false)} />

    
      </div> 
    ) }
    