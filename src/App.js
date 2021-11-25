import React from "react";
import { BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import { ImProfile } from "react-icons/im";
import {RiSwordLine} from "react-icons/ri";
import {MdCatchingPokemon} from "react-icons/md";
import {AiFillHome} from "react-icons/ai";

import "./App.css";
// import Movie from "./pages/Movie";
// import Profile from "./pages/Profile";
import Status from "./pages/Status";
import StatusDetail from "./pages/StatusDetail";
import Profile from "./pages/Profile";
import MainMenu from "./pages/MainMenu";
import MoveMenu from "./pages/MoveMenu";
import FMoveDetail from "./pages/FMoveDetail";
import CMoveDetail from "./pages/CMoveDetail";
import FMove from "./pages/FMove";
import CMove from "./pages/CMove";


function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Scuffed PGO Wiki</p>
      </header>

      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route path="/MainMenu" component={MainMenu} />
        <Route path="/cmove" component={CMove} />
        <Route path="/cmovedetail/:index" component={CMoveDetail}/>
        <Route path="/fmove" component={FMove} />
        <Route path="/fmovedetail/:index" component={FMoveDetail}/>
        <Route path="/status" component={Status} />
        <Route path="/statusdetail/:index" component={StatusDetail}/>
        <Route path="/Profile" component={Profile} />
        <Route path="/MoveMenu" component={MoveMenu} />
      </Switch>

      <footer>
      <NavLink to="/MainMenu" className="iconWrapper">
          <AiFillHome className="icon" />
          Menu
        </NavLink>
        <NavLink to="/MoveMenu" className="iconWrapper">
          <RiSwordLine  className="icon" />
          Moveset
        </NavLink>
        <NavLink to="/status" className="iconWrapper">
          <MdCatchingPokemon  className="icon" />
          Pokemon
        </NavLink>
        <NavLink to="/Profile" className="iconWrapper">
          <ImProfile  className="icon" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
