export default function About(){
    return(
        <div style={{width : '100%' , display : 'flex' , justifyContent : 'center' , alignItems: 'center' , padding: '50px 0'}}>
        <div style={{  width : '55%' ,padding: "40px", lineHeight: "1.7" , backgroundColor : 'white' ,  boxShadow: '12px 12px 10px grey' , textAlign : 'center' , borderRadius : '10px'}} >

                <h1>About Foodie Recipe</h1>

      <p>
        Foodie Recipe is a simple recipe website that helps users search for
        meals, explore different food categories, and view recipe details.
      </p>

      <p>
        The website uses TheMealDB API to get meal information, images,
        categories, countries, and cooking instructions.
      </p>

      <p>
        This project was built with React, React Router, Axios, and React
        Bootstrap.
      </p>
        </div>
          </div>
    )
}