import { Card, Col, Row } from 'react-bootstrap'
import fantasy from '../fantasy/fantasy.json'

const AllTheBooks = () => {
  console.log(fantasy)

  return (
    <Row>
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin} className='mt-4 bg-info' >
            <Card className="book-cover m-4 p-3" style={{width: "450px"},{height: "450px"}} >
              <Card.Img variant="top" src={book.img} style={{width: "50px"},{height: "350px"}} />
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

export default AllTheBooks
