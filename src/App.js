import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import CreateTask from "./components/CreateTask/CreateTask";
import Tasks from "./components/Tasks/Tasks";
import Task from "./components/Submission/Task";
import BottomBar from "./components/BottomBar/BottomBar";

const App = () => {
   const location = useLocation();

   return (
      <>
         <Switch>
            <Route exact path="/">
               <Landing />
            </Route>
            <Route exact path="/createTask">
               <CreateTask />
            </Route>
            <Route exact path="/tasks">
               <Tasks />
            </Route>
            <Route path="/tasks/:id">
               <Task />
            </Route>
         </Switch>
         {location.pathname !== "/" ? <BottomBar /> : null}
      </>
   );
};

export default App;
