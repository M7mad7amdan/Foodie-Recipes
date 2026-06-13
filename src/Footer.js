import Scroll  from "./Scrool"
import { Link } from "react-router-dom"
export default function Footer(){
    return( 
        <div style={{color : '#fff7ed' , backgroundColor : '#4a2f26'}}>

        <div style={{display : 'grid' ,  gridTemplateColumns : '1fr 1fr 1fr ' , gap : '30px', width : '100%' , minHeight : '250px' }}>
                 <div style={{display : 'flex' , justifyContent : 'flex-start' , flexDirection : 'column' , alignItems : 'center' }}>
                  <h2 style={{paddingTop : '20px'}}>
                   Foodie Recipes
                  </h2>
                       <h5>
                        Discover delicious recipes from around the world.
                       </h5>

<div style={{display : 'flex' , flexDirection : 'row' , justifyContent : 'space-evenly' , gap : '20px'}}>
<h3 style={{cursor : 'pointer'}} href='https://github.com/M7mad7amdan' className="bi bi-github"></h3>

<h3 href='' style={{cursor : 'pointer'}} className="bi bi-envelope"></h3>
</div>

                 </div>
<div >
    <h4 style={{marginTop : '20px' , display : "flex" , justifyContent : 'center'}} >Quick Links</h4>
    <ul style={{ display : "flex" , justifyContent : 'center' , flexDirection : 'column' , gap : '15px' , listStyle : 'none'}}>
 
 
  <li style={{cursor : 'pointer'}} href=''> 
    <Link  to='/'>
    <i style={{color : '#d97706'}} className="bi bi-house  me-2" ></i>
    Home
     </Link>
    </li>


 
 
  <li style={{cursor : 'pointer'}} href=''> <Link  to='/#Categories'>
    <i  style={{color : '#d97706'}} className="bi bi-grid  me-2 " ></i> Categories
     </Link>
    </li>
 
 
  <li style={{cursor : 'pointer'}} href=''> <Link  to='/#PopularRecipes'>
    <i style={{color : '#d97706'}} className="bi bi-grid me-2" ></i>Popular Recipes
      </Link>
     </li>
   


    <li style={{cursor : 'pointer'}} href=''>  <Link to="/About">
   <i style={{color : '#d97706'}} className="bi bi-heart  me-2"></i>
    Favorites
   </Link>
   </li>


 <li style={{ cursor: 'pointer' }}>
  <Link to="/About">
    <i style={{color : '#d97706'}} className="bi bi-info-circle me-2"></i>
    About US
  </Link>
</li>
</ul>                 
</div>
 

                <div >
                      <h4 style={{marginTop : '20px' , display : "flex" , justifyContent : 'center'}} >Categories</h4>
    <ul style={{ display : "flex" , justifyContent : 'center' , flexDirection : 'column' , gap : '15px' , listStyle : 'none'}}>
  <li style={{cursor : 'pointer'}}  as={Link} to='/category/Beef'>Beef</li>
  <li style={{cursor : 'pointer'}}  as={Link}  to='/category/Chicken'>Chicken</li>
    <li style={{cursor : 'pointer'}} as={Link}  to='/category/Dessert'>Dessert</li>
  <li style={{cursor : 'pointer'}}   as={Link}  to='/category/SeaFood'>SeaFood</li>
    <li style={{cursor : 'pointer'}}  as={Link}  to='/category/Vegetarian'>Vegetarian</li>

</ul>
</div>



        </div>
 <hr></hr>
        <div  style={{display : 'flex'  , flexDirection : 'row' , justifyContent : 'space-evenly'}}>
           <p>2026 Foodie Recipe. All rights reserved.</p>

<div>


<i class="bi bi-activity"></i>
           <i class="bi bi-heart-fill"></i>
           <i class="bi bi-activity"></i>


           <i class="bi bi-activity"></i>
           <i class="bi bi-heart-fill"></i>
           <i class="bi bi-activity"></i>


<i class="bi bi-activity"></i>
           <i class="bi bi-heart-fill"></i>
           <i class="bi bi-activity"></i>

           </div>


<p> Made With            <i style={{marginRight : '4px'}} class="bi bi-heart-fill" ></i>
    for food Lovers </p>

        </div>

            </div>

    )
}