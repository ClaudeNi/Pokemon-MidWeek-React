import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonStats from "../PokemonStats/PokemonStats";
import pokemonList from "../../assets/pokemon/pokemon";
import Options from "../Options/Options";
import MoveOptions from "../MoveOptions/MoveOptions";
import "./battleboard.css";
import "./pokemon.css";

const BattleBoard = () => {
    const { mapName } = useParams();

    // eslint-disable-next-line
    const [text, setText] = useState("You sent out Treecko");
    // eslint-disable-next-line
    const [playerPokemonList, setPlayerPokemonList] = useState([252]);
    const [pokemon, setPokemon] = useState(
        pokemonList.get(playerPokemonList[0])
    );
    // eslint-disable-next-line
    const [selectingPlayer, setSelectingPlayer] = useState(true);
    // eslint-disable-next-line
    const [enemyPokemonList, setEnemyPokemonList] = useState([258]);
    const [enemyPokemon, setEnemyPokemon] = useState(
        pokemonList.get(enemyPokemonList[0])
    );
    const [fighting, setFighting] = useState(false);
    // eslint-disable-next-line
    const [selectedMove, setSelectedMove] = useState(pokemon.moveList[0]);

    const boardRef = useRef();
    const optionsBox = useRef();

    useEffect(() => {
        displayPokemon(playerPokemonList[0], enemyPokemonList[0]);
    }, [playerPokemonList, enemyPokemonList]);

    const displayPokemon = (playerId, enemyId) => {
        const playerPokemon = pokemonList.get(playerId);
        const enemyPokemon = pokemonList.get(enemyId);

        setPokemon(playerPokemon);
        setEnemyPokemon(enemyPokemon);
    };

    const handleFight = () => {
        setFighting(true);
    };

    return (
        <div className="all-container">
            <div ref={boardRef} className="battleboard">
                <div className={`${mapName} pixel-art`}>
                    <div className="pokemon-container">
                        <div className="stats">
                            <PokemonStats
                                who="Enemy"
                                pokemon={enemyPokemon}
                                maxHP={enemyPokemon.stats.hp}
                            />
                        </div>
                        <div
                            className={`pokemon ${enemyPokemon.front_img}`}
                        ></div>
                    </div>
                    <div className="pokemon-container">
                        <div className={`pokemon ${pokemon.back_img}`}>
                            <img src={pokemon.back_img} alt={pokemon.name} />
                        </div>
                        <div className="stats">
                            <PokemonStats
                                who="Player"
                                pokemon={pokemon}
                                maxHP={pokemon.stats.hp}
                                exp={0}
                            />
                        </div>
                    </div>
                </div>
                {fighting ? (
                    <MoveOptions
                        selectedMove={selectedMove}
                        pokemon={pokemon}
                    />
                ) : (
                    <div className="text-box pixel-art">
                        <div className="left-textbox">
                            <span className="left-text">{text}</span>
                        </div>
                        <div ref={optionsBox} className="right-textbox">
                            <Options
                                handleClick1={handleFight}
                                btn1="Fight"
                                btn2="Bag"
                                btn3="Pokemon"
                                btn4="Run"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BattleBoard;
