import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Landing from "./layout/Landing";
import Login from "./auth/Login";
import Register from "./auth/Register";
import DashboardHome from "./dashboard/DashboardHome";
import Profiles from "./profiles/Profiles";
import Profile from "./profile/Profile";
import Posts from "./posts/Posts";
import Post from "./post/Post";
import CreateProfile from "./createProfile/CreateProfile";
import AddEducation from "./addCredentials/AddEducation";
import AddExperience from "./addCredentials/AddExperience";
// import CreateProfile from "./createProfile/CreateProfile";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={DashboardHome} />
          <Route exact path="/dashboard/Profile" component={DashboardHome} />
          <Route path="/allProfiles" component={Profiles} />
          <Route path="/profile/:handle" component={Profile} />
          <Route path="/feed" component={Posts} />
          <Route path="/post/:id" component={Post} />
          <Route
            path="/dashboard/createProfile"
            render={() => {
              return <CreateProfile createEdit="Create" />;
            }}
          />
          <Route
            path="/dashboard/editProfile"
            render={() => {
              return <CreateProfile createEdit="Edit" />;
            }}
          />
          <Route path="/dashboard/addExperience" component={AddExperience} />
          <Route path="/dashboard/addEducation" component={AddEducation} />
          <Route path="/" component={Landing} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
