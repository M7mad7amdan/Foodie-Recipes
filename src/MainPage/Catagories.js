import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function catagories(props) {
  return (
    <Card className='catagoriescard' style={{ width: '18rem' , height : '18rem' , boxShadow : '0 6px 18px rgba(0,0,0,0.08)' , maxWidth: '1500px',
margin: '0 auto'}}>
      <Card.Img variant="top" src={props.img} style={{width : '100%' , height : '40%' , objectFit: 'cover'}}/>
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
         {props.text}
        </Card.Text>
        <Button style={{backgroundColor : "brown"}}>Explore Recipes</Button>
      </Card.Body>
    </Card>
  );
}

export default catagories;