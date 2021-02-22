import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Products from '../src/pages/home/Products';


const App = ()=>{
  return (
  <Router>
     <Header/> 
     <Route path="/" exact>
        <Products/>
     </Route>
  </Router>
  )
}

export default App;
