import { React } from 'react';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Links from './components/Links'

function App(){
  return(
    <Router>
      <Links></Links>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
      </Routes>
    </Router>
  )

}

export default App;
