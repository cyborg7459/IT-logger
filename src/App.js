import { Route, Switch } from 'react-router-dom';

import './index.css';
import './font-sizes.css';

import Header from './components/header/header-component';
import UsersPage from './pages/users/users-page';
import IssuesPage from './pages/issues/issues-page';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={IssuesPage} />
        <Route exact path='/users' component={UsersPage} />
      </Switch>
    </div>
  )
}
export default App;
