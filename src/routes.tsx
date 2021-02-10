import { Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </Switch>
  )
}

export default Routes