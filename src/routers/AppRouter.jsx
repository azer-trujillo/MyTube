import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
// import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import WatchVideo from '../components/WatchVideo';
import WatchLater from '../components/WatchLater';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/watch/:videoId" component={WatchVideo} />
        <PrivateRoute path="/watchlater" component={WatchLater} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
