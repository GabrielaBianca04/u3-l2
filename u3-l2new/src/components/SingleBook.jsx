
import { Row,Col,Card } from 'react-bootstrap'
import React from 'react'


/*const SingleBook=(props)=>{
props=book[1]
return(
    <Container>
        <Row>
            <Col sm={12} md={6} xl={3} key={props.asin}>
            <Card>
                <Card.Img variant="top" src={props.img}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
                </Card>
                </Col>
        </Row>
    </Container>
)
}*/

state = {
    
}


class SingleBook extends React.Component {
    render(){
        return (
                <Row>
                  {fantasy.map((book) => {
                    return (
                      <Col xs={12} md={4} key={book.asin} className='mt-4 bg-info' >
                        <Card className="book-cover m-4 p-3">
                          <Card.Img variant="top" src={book.img}/>
                          <Card.Body className='p-2'>
                            <Card.Title>{book.title}</Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                    )
                  })}
                </Row>
              )
            }   
        
    }


export default SingleBook