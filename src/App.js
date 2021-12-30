import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import GameBoard from "./components/GameBoard/GameBoard";
import Map from "./components/Map/Map";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/game" exact component={GameBoard} />
                    <Route path="/game/:mapName" exact component={Map} />
                    <Route component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
