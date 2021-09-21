// import './App.css';
import Semesters from "./Components/Semesters/Semesters";
import EditSemesters from "./Components/Semesters/Edit/EditSemesters"
import AddSemester from './Components/Semesters/AddNew/AddSemester'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/semestersEdit">
          <EditSemesters />
        </Route>
        <Route path="/semestersAdd">
          <AddSemester />
        </Route>
        <Route exac path="/">
          <Semesters />
        </Route>
      </Switch>
    </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Semesters/>

//     </div>
//   );
// }

export default App;
