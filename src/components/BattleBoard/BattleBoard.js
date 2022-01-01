import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import pokemonList from "../../assets/pokemon/pokemon";
import "./battleboard.css";

const BattleBoard = () => {
    const { mapName } = useParams();
    // eslint-disable-next-line
    const [playerPokemonList, setPlayerPokemonList] = useState([252]);
    const [pokemon, setPokemon] = useState();
    // eslint-disable-next-line
    const [enemyPokemonList, setEnemyPokemonList] = useState([252]);
    const [enemyPokemon, setEnemyPokemon] = useState();
    const boardRef = useRef();

    useEffect(() => {
        displayPokemon(playerPokemonList[0], enemyPokemonList[0]);
    }, [playerPokemonList, enemyPokemonList]);

    const displayPokemon = (playerId, enemyId) => {
        const playerPokemon = pokemonList.get(playerId);
        const enemyPokemon = pokemonList.get(enemyId);

        setPokemon(playerPokemon.back_img);

        setEnemyPokemon(enemyPokemon.front_img);
    };

    return (
        <div ref={boardRef} className="battleboard">
            <div className={`${mapName} pixel-art`}>
                <div className="pokemon-container">
                    <div className="stats"></div>
                    <div className={`pokemon ${enemyPokemon}`}></div>
                </div>
                <div className="pokemon-container">
                    <div className={`pokemon ${pokemon}`}></div>
                    <div className="stats"></div>
                </div>
            </div>
            <div className="text-box pixel-art">
                <div className="texts">
                    <span className="option-text">Fight</span>
                    <span className="option-text">Bag</span>
                </div>
                <div className="texts">
                    <span className="option-text">Pokemon</span>
                    <span className="option-text">Run</span>
                </div>
            </div>
        </div>
    );
};

export default BattleBoard;
