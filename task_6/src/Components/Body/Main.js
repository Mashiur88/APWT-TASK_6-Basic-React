import react from "react";
import Home from './Home/Home.js';
import Studentlist from "./List/Studentlist.js";
import Contact from "./Contact/Contact.js";
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Details from "./Details/Details.js";
const Main = () =>{
    return(
        <div>
         <Router>
            <Switch>
              <Route exact path="/"><Home/></Route>
              <Route exact path="/list">
                  <table className="table table-responsive" >
                  <td align="center"><Studentlist name="Mashiur" id="18-37227-1" cgpa="3.00"/></td>
                  <td align="center"><Studentlist name="Pushan" id="18-37225-1" cgpa="3.22"/></td>
                  <td align="center"><Studentlist name="Roki" id="18-37222-1" cgpa="3.42"/></td>
                  <td align="center"><Studentlist name="Pritom" id="18-37225-1" cgpa="3.12"/></td>
                  <td align="center"><Studentlist name="Tusher" id="18-37225-1" cgpa="3.29"/></td>
                  </table>
              </Route>
              <Route exact path="/contact"><Contact/></Route>
              <Route exact path="/details/:id/:name/:cgpa"><Details/></Route>
            </Switch>
         </Router>
        </div>
    );
}
export default Main;