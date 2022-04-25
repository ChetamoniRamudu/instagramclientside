import './App.css';
import { Route, Switch,NavLink } from "react-router-dom";
import Register from './components/register';
import Login from './components/login'
import Fetchpost from './components/fetchpost'
import Postpost from './components/postpost'
import Popup from './components/popup'
import Main from './components/main'
function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/update" exact component={Popup} />
      <Route path="/postspost" exact component={Postpost} />
      <Route path="/posts" exact component={Fetchpost} />
      <Route path="/signup" exact component={Register} />
      <Route path="/signin" exact component={Login} />

      </Switch>
    </div>
  );
}

export default App;
