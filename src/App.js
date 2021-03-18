import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar/sidebar';
import Header from './components/Header/Header';
import Dashboard from './pages/dashboard/dashboard';
import blog_post from './pages/blog_post/blog_post';
import add_post from './pages/add_post/add_post';
import form from './pages/form_component/form';
import tables from './pages/tables/table';
import user from './pages/user_profile/user';
import error from './pages/errors/error';
function App() {
  return (
    <>
        <Router>
            <div>
              <Sidebar />
            </div>
            <div className="container">
              <Header />

              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/blog_post" component={blog_post} />
                <Route exact path="/add_post" component={add_post} />
                <Route exact path="/form" component={form} />
                <Route exact path="/tables" component={tables} />
                <Route exact path="/user_profile" component={user} />
                <Route exact path="/errors" component={error} />
              </Switch>
            </div>
        </Router>
    </>
  )
}

export default App;
