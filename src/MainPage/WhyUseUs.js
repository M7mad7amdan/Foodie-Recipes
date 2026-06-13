import Card from 'react-bootstrap/Card';

function WhyUseUs(props) {
  return (
<>
<Card className="WhyUseUs" border="dark" style={{ width: '18rem' , boxShadow  : '  5px 5px #888888' , marginBottom : '30px'}}>
       
    
      <div style={{display : 'flex' , flexDirection :'row' , justifyContent : 'center' , backgroundColor : 'none' , marginBottom : '30px'}}>
<i style={{marginTop : '9px'}} className={props.icon}></i>
<span style={{marginTop : '9px' , marginLeft : '3px'}} >{props.Header}</span>
                
      </div>
        

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
      <br /> 
</> 
  )} 

      export default WhyUseUs;