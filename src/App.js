import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import TitleScreen from "./pages/TitleScreen/TitleScreen";
import TeamBuilderPage from "./pages/TeamBuilderPage/TeamBuilderPage";
import BattleBoard from "./components/BattleBoard/BattleBoard";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/title" exact component={TitleScreen} />
					<Route
						path="/teamBuilder"
						exact
						component={TeamBuilderPage}
					/>
					<Route
						path="/game/battle/:mapName"
						exact
						component={BattleBoard}
					/>
					<Route component={PageNotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
