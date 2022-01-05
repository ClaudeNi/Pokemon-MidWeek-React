import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PokemonStats from "../PokemonStats/PokemonStats";
import Options from "../Options/Options";
import MoveOptions from "../MoveOptions/MoveOptions";
import "./battleboard.css";
// import "./pokemon.css";

const LINK =
    "https://raw.githubusercontent.com/Checchii/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated";
let winnerCheck = false;

const BattleBoard = () => {
    const history = useHistory();
    const { mapName } = useParams();
    const pokemonStorage = JSON.parse(window.sessionStorage.pokemon);
    const enemyStorage = JSON.parse(window.sessionStorage.enemy);

    // eslint-disable-next-line
    const [text, setText] = useState(
        `${pokemonStorage.pokemon[0].name.toUpperCase()} go!`
    );
    // eslint-disable-next-line
    const [playerPokemonList, setPlayerPokemonList] = useState([
        pokemonStorage.pokemon,
    ]);
    // eslint-disable-next-line
    const [pokemon, setPokemon] = useState(pokemonStorage.pokemon);
    // eslint-disable-next-line
    const [selectingPlayer, setSelectingPlayer] = useState(true);
    // eslint-disable-next-line
    const [playerDmg, setPlayerDmg] = useState(0);
    // eslint-disable-next-line
    const [enemyPokemonList, setEnemyPokemonList] = useState([
        enemyStorage.pokemon,
    ]);
    // eslint-disable-next-line
    const [enemyPokemon, setEnemyPokemon] = useState(enemyStorage.pokemon);
    // eslint-disable-next-line
    const [enemyDmg, setEnemyDmg] = useState(0);
    const [fighting, setFighting] = useState(false);
    // eslint-disable-next-line
    const [selectedMove, setSelectedMove] = useState(pokemonStorage.moves);
    const [disable, setDisable] = useState(false);

    const handleFight = () => {
        setFighting(!fighting);
    };

    const handleDamage = (dmg, move) => {
        setDisable(true);
        setText(`${pokemon[0].name} use ${selectedMove[move].name}!`);
        setTimeout(() => {
            setEnemyDmg(enemyDmg + dmg);
            if (!winnerCheck) {
                setTimeout(() => {
                    handleEnemyTurn();
                }, 1000);
            }
        }, 1000);
    };

    const handleGameOver = (winner) => {
        setText(`${winner} have won the game!`);
        setTimeout(() => {
            history.replace("/title");
        }, 3000);
    };

    const handleEnemyTurn = () => {
        if (!winnerCheck) {
            const chosenMove = Math.floor(
                Math.random() * enemyStorage.moves.length
            );

            if (enemyStorage.moves.length > 0) {
                setText(
                    `${enemyPokemon[0].name} used ${enemyStorage.moves[chosenMove].name}!`
                );
                const dmg = Math.floor(
                    ((((2 * 100) / 5 + 2) *
                        enemyStorage.moves[chosenMove].power *
                        (enemyPokemon[0].stats[1].base_stat /
                            enemyPokemon[0].stats[2].base_stat)) /
                        50 +
                        2) *
                        Math.min(Math.random() + 0.5, 1)
                );
                setPlayerDmg(playerDmg + dmg);
            }
            setDisable(false);
        }
    };

    const handleWinnerSet = () => {
        winnerCheck = true;
    };

    return (
        <div className="all-all-container">
            {disable ? <div className="disable-container"></div> : null}
            <div className="battleboard">
                <div className={`${mapName} pixel-art`}>
                    <div className="pokemon-container">
                        <div className="stats">
                            <PokemonStats
                                who="Enemy"
                                pokemon={enemyPokemon}
                                maxHP={enemyPokemon[0].stats[0].base_stat}
                                initialHP={enemyPokemon[0].stats[0].base_stat}
                                damage={enemyDmg}
                                level={100}
                                gameOverHandle={handleGameOver}
                                handleWin={handleWinnerSet}
                            />
                        </div>
                        <div className={`pokemon`}>
                            <img
                                src={`${LINK}/${enemyPokemon[0].id}.gif`}
                                alt={enemyPokemon[0].name}
                                className="pixel"
                            />
                        </div>
                    </div>
                    <div className="pokemon-container">
                        <div className={`pokemon`}>
                            <img
                                src={`${LINK}/back/${pokemon[0].id}.gif`}
                                alt={pokemon[0].name}
                                className="pixel"
                            />
                        </div>
                        <div className="stats">
                            <PokemonStats
                                who="You"
                                pokemon={pokemon}
                                maxHP={pokemon[0].stats[0].base_stat}
                                initialHP={pokemon[0].stats[0].base_stat}
                                damage={playerDmg}
                                level={100}
                                gameOverHandle={handleGameOver}
                                handleWin={handleWinnerSet}
                            />
                        </div>
                    </div>
                </div>
                <MoveOptions
                    selectedMove={selectedMove}
                    pokemon={pokemon}
                    moves={selectedMove}
                    lvl={100}
                    fightHandle={handleFight}
                    dmgHandle={handleDamage}
                    displayClass={fighting ? "" : "hide-display"}
                />
                <div
                    className={`text-box pixel-art ${
                        fighting ? "hide-display" : ""
                    }`}
                >
                    <div className="left-textbox">
                        <span className="left-text">{text}</span>
                    </div>
                    <div className="right-textbox">
                        <Options
                            handleClick1={handleFight}
                            btn1="Fight"
                            btn2="Bag"
                            btn3="Pokemon"
                            btn4="Run"
                            selected={() => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BattleBoard;
