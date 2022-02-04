import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RegisterForm from './RegisterForm/RegisterForm'
import Registerbtn from './Mainpage/Mainpage'
import Login from './Login/Login'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Registerbtn />
          </Route>
          <Route path='/register'>
            <RegisterForm />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
