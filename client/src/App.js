import Home from './components/homeComponent/home';
import User from './components/userComponent/user.js';
import Register from './components/authComponent/registerComponent/register';
import Login from './components/authComponent/loginComponent/login';
import Navigation from './components/navigationComponent/navigation';
import {
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
        <Routes>
          <Route path="/"exact element={<Home />}> </Route>
          <Route path="/user" >
          <Route path='' element={<User />} />
          <Route path='login'  element={<Login />} />
          <Route path='register'  element={<Register />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
