import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import Favorite from "./pages/Favorites";
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetups'>
          <NewMeetupsPage />
        </Route>
        <Route path='/favorite'>
          <Favorite />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
