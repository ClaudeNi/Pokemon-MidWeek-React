import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonStats from "../PokemonStats/PokemonStats";
import pokemonList from "../../assets/pokemon/pokemon";
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
    const [enemyPokemonList, setEnemyPokemonList] = useState([255]);
    const [enemyPokemon, setEnemyPokemon] = useState(
        pokemonList.get(enemyPokemonList[0])
    );

    const boardRef = useRef();
    const optionsBox = useRef();
    const button1Ref = useRef();
    const button2Ref = useRef();
    const button3Ref = useRef();
    const button4Ref = useRef();

    useEffect(() => {
        displayPokemon(playerPokemonList[0], enemyPokemonList[0]);
    }, [playerPokemonList, enemyPokemonList]);

    useEffect(() => {
        button1Ref.current.addEventListener("click", () => {});
    });

    const displayPokemon = (playerId, enemyId) => {
        const playerPokemon = pokemonList.get(playerId);
        const enemyPokemon = pokemonList.get(enemyId);

        setPokemon(playerPokemon);
        setEnemyPokemon(enemyPokemon);
    };

    return (
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
                    <div className={`pokemon ${enemyPokemon.front_img}`}></div>
                </div>
                <div className="pokemon-container">
                    <div className={`pokemon ${pokemon.back_img}`}></div>
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
            <div className="text-box pixel-art">
                <div className="left-textbox">
                    <span className="left-text">{text}</span>
                </div>
                <div ref={optionsBox} className="right-textbox">
                    <div className="texts">
                        <span ref={button1Ref} className="option-text">
                            Fight
                        </span>
                        <span ref={button2Ref} className="option-text">
                            Bag
                        </span>
                    </div>
                    <div className="texts">
                        <span ref={button3Ref} className="option-text">
                            Pokemon
                        </span>
                        <span ref={button4Ref} className="option-text">
                            Run
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BattleBoard;
