import './App.css';
import { Route } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form'
function App() {
  return (
    <div className="App">
        <Route exact path='/' component={Landing}/>
        <Route path='/home' component={Home}/>
        <Route path='/detail' component={Detail}/>
        <Route path='/form' component={Form}/>
      <h1>Henry Pokemon</h1>
    </div>
  );
}

export default App;
