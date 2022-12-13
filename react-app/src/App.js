import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import ShowAllStories from './components/AllStories';
import GetStoryDetail from './components/StoryDetail';
import CreateStory from './components/CreateStory/CreateStory';
import ShowMyStories from './components/MyStories/MyStories';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);


  return (
    <BrowserRouter>
      <NavBar loaded={loaded} setLoaded={setLoaded} />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/stories' exact={true}>
          <ShowAllStories />
        </Route>
        <Route path='/stories/new' exact={true}>
          <CreateStory />
        </Route>
        <Route path='/profile' exact={true}>
          <ShowMyStories />
        </Route>
        <Route path='/stories/:storyId' exact={true}>
          <GetStoryDetail />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/stories/user/:userId/mine' exact={true}>
          <ShowMyStories />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;


//Hello everyone
