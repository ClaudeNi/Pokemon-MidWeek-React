import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonStats from "../PokemonStats/PokemonStats";
import pokemonList from "../../assets/pokemon/pokemon";
import Options from "../Options/Options";
import MoveOptions from "../MoveOptions/MoveOptions";
import "./battleboard.css";
// import "./pokemon.css";

const BattleBoard = () => {
    const { mapName } = useParams();
    const pokemonStorage = JSON.parse(window.sessionStorage.pokemon);

    // eslint-disable-next-line
    const [text, setText] = useState(
        `${pokemonStorage[0].pokemon.name.toUpperCase()} go!`
    );
    // eslint-disable-next-line
    const [playerPokemonList, setPlayerPokemonList] = useState([
        pokemonStorage[0].pokemon,
    ]);
    // eslint-disable-next-line
    const [pokemon, setPokemon] = useState(pokemonStorage[0].pokemon);
    // eslint-disable-next-line
    const [selectingPlayer, setSelectingPlayer] = useState(true);
    // eslint-disable-next-line
    const [enemyPokemonList, setEnemyPokemonList] = useState([258]);
    // eslint-disable-next-line
    const [enemyPokemon, setEnemyPokemon] = useState(
        pokemonList.get(enemyPokemonList[0])
    );
    const [fighting, setFighting] = useState(false);
    // eslint-disable-next-line
    const [selectedMove, setSelectedMove] = useState(pokemonStorage[0].moves);

    const boardRef = useRef();
    const optionsBox = useRef();

    useEffect(() => {
        // displayPokemon(playerPokemonList[0], enemyPokemonList[0]);
        // eslint-disable-next-line
    }, [playerPokemonList, enemyPokemonList]);

    // const displayPokemon = (playerId, enemyId) => {
    //     const playerPokemon = pokemonStorage.pokemon;
    //     const enemyPokemon = pokemonList.get(enemyId);
    //     console.log(playerPokemon, 1);
    //     setPokemon(playerPokemon.pokemon);
    //     setEnemyPokemon(enemyPokemon);
    // };

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
                                initialHP={enemyPokemon.stats.hp}
                                damage={0}
                            />
                        </div>
                        <div
                            className={`pokemon ${enemyPokemon.front_img}`}
                        ></div>
                    </div>
                    <div className="pokemon-container">
                        <div className={`pokemon`}>
                            <img
                                src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                            />
                        </div>
                        <div className="stats">
                            <PokemonStats
                                who="Player"
                                pokemon={pokemon}
                                maxHP={pokemon.stats[0].base_stat}
                                initialHP={pokemon.stats[0].base_stat}
                                damage={0}
                            />
                        </div>
                    </div>
                </div>
                {fighting ? (
                    <MoveOptions
                        selectedMove={selectedMove}
                        pokemon={pokemon}
                        moves={selectedMove}
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
                                selected={() => {}}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BattleBoard;
