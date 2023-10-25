
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'

import AllTheBooks from './components/AllTheBooks'
import SingleBook from './components/SingleBook'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container>
      <MyNav />
     
      <AllTheBooks />
      <SingleBook/>
      <MyFooter />
    </Container>
  )
}



export default App;
