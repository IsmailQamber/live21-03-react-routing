import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { Route, Switch } from "react-router";

const App = ({ instructors }) => {
  <div>
    <Switch>
      <Route path="/instructors/:instructorSlug">
        <InstructorProfile instructors={instructors} instructorSlug="hasan" />
      </Route>
      <Route exact path="/">
        <Home instructors={instructors} />
      </Route>
      <Route path="/404">
        <NotFound />;
      </Route>
    </Switch>
  </div>;
};

export default App;
