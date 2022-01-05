import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Btn from "../Btn/Btn";
import Spinner from "../Spinner/Spinner";
import pokeApi from "../../api/pokeAPI";
import "./teamBuilder.css";
import MoveItem from "../MoveItem/MoveItem";

const LINK =
    "https://raw.githubusercontent.com/Checchii/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated";

const TeamBuilder = () => {
    const [inputValue, setInputValue] = useState("");
    const [pokemon, setpokemon] = useState("");
    const [selectedMoves, setSelectedMoves] = useState([]);
    const [enemySelectedMoves, setEnemySelectedMoves] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);
    // eslint-disable-next-line
    const [enemyPokemonList, setEnemyPokemonList] = useState([]);
    const [choosingPlayer, setChoosingPlayer] = useState(true);
    const [text, setText] = useState("");
    const [btnText, setBtnText] = useState("Choose Enemy's Pokemon");
    const [spinner, setSpinner] = useState(false);

    const inputRef = useRef();

    const history = useHistory();

    useEffect(() => {
        window.sessionStorage.clear();
    }, []);

    useEffect(() => {
        inputRef.current.addEventListener("keyup", handleSearch);
    });

    const fetchPokemon = async (input) => {
        if ((input < 650 && input > 0) || typeof input === "string") {
            setSpinner(true);
            try {
                const result = await pokeApi.get(`pokemon/${input}`);
                setpokemon(result.data);
                setSpinner(false);
            } catch (e) {
                console.log(e);
            }
        }
    };

    const handleSearch = (e) => {
        setpokemon("");
        if (e.key === "Enter") {
            if (inputValue !== "") {
                fetchPokemon(inputRef.current.value);
            }
        }
    };

    const handleSearchClick = () => {
        setpokemon("");
        if (inputValue !== "") {
            fetchPokemon(inputRef.current.value);
        }
    };

    const handleMoveSelect = async (name) => {
        setSpinner(true);
        try {
            const result = await pokeApi.get(`move/${name}`);
            if (choosingPlayer) {
                const moves = [...selectedMoves];
                if (moves.filter((move) => move.name === name)[0]) {
                    const index = moves.findIndex((move) => move.name === name);
                    moves.splice(index, 1);
                } else {
                    moves.push(result.data);
                }
                setSelectedMoves(moves);
            } else {
                const moves = [...enemySelectedMoves];
                if (moves.filter((move) => move.name === name)[0]) {
                    const index = moves.findIndex((move) => move.name === name);
                    moves.splice(index, 1);
                } else {
                    moves.push(result.data);
                }
                setEnemySelectedMoves(moves);
            }
            setSpinner(false);
        } catch (e) {
            console.log(e);
        }
    };

    const handleFinish = () => {
        if (selectedMoves.length < 2) {
            setText("Please choose at least 2 attack moves for the Pokemon");
        } else if (choosingPlayer) {
            setChoosingPlayer(false);
            const newList = [...pokemonList];
            newList.push(pokemon);
            setPokemonList(newList);
            setpokemon("");
            setInputValue("");
            setBtnText("Let's Battle!");
        } else if (enemySelectedMoves.length < 2) {
            setText("Please choose at least 2 attack moves for the Pokemon");
        } else {
            const newList = [...enemyPokemonList];
            newList.push(pokemon);

            const finalList = {
                pokemon: pokemonList,
                moves: selectedMoves,
            };
            const enemyList = {
                pokemon: newList,
                moves: enemySelectedMoves,
            };
            window.sessionStorage.setItem("pokemon", JSON.stringify(finalList));
            window.sessionStorage.setItem("enemy", JSON.stringify(enemyList));
            history.replace("/game/battle/custom");
        }
    };

    const displayPokemon = () => {
        return (
            <div className="bottom">
                <div className="all-container">
                    <div className="pokemon-build-container">
                        <img
                            src={`${LINK}/${pokemon.id}.gif`}
                            alt={pokemon.id}
                            className="pixel"
                        />
                        <div className="line">
                            <span className="label">Name: </span>
                            {pokemon.name.toUpperCase()}
                        </div>
                        <div className="line">
                            <span className="label">Type: </span>
                            {pokemon.types[0].type.name.toUpperCase()}
                        </div>
                    </div>
                    <div className="moves-container">{displayMoves()}</div>
                    <div className="selected-moves-container">
                        Selected moves {displaySelectedMoves()}
                    </div>
                </div>
                {text}
                <Btn
                    text={btnText}
                    clickHandle={handleFinish}
                    className="bigger-text"
                />
            </div>
        );
    };

    const displayMoves = () => {
        return pokemon.moves.map((move) => {
            if (choosingPlayer) {
                return (
                    <MoveItem
                        key={move.move.url}
                        move={move}
                        moveHandle={handleMoveSelect}
                        length={selectedMoves.length}
                        current={choosingPlayer}
                    />
                );
            }
            return (
                <MoveItem
                    key={move.move.url}
                    move={move}
                    moveHandle={handleMoveSelect}
                    length={enemySelectedMoves.length}
                    current={choosingPlayer}
                />
            );
        });
    };

    const displaySelectedMoves = () => {
        if (choosingPlayer) {
            return selectedMoves.map((move) => {
                return (
                    <div key={move.id} className="selected-container">
                        <div className="line">
                            <span className="label">Name: </span>
                            {move.name}
                        </div>
                        <div className="line">
                            <span className="label">Desc: </span>
                            {move.flavor_text_entries[0].flavor_text}
                        </div>
                        <div className="line">
                            <span className="label">PP: </span>
                            {move.pp}
                        </div>
                    </div>
                );
            });
        }
        return enemySelectedMoves.map((move) => {
            return (
                <div key={move.id} className="selected-container">
                    <div className="line">
                        <span className="label">Name: </span>
                        {move.name}
                    </div>
                    <div className="line">
                        <span className="label">Desc: </span>
                        {move.flavor_text_entries[0].flavor_text}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="team-builder">
            {spinner ? <Spinner /> : null}
            <div className="intro-text-container">
                <span>Please choose a Pokemon from Gen 1 up to Gen 5.</span>
                <span>
                    You can search by either their ID (1 - 649) or their name.
                </span>
            </div>
            <div className="pokemon-all-container">
                {choosingPlayer ? (
                    <span className="choosing">Choosing your Pokemon</span>
                ) : (
                    <span className="choosing">
                        Choosing your enemy's Pokemon
                    </span>
                )}
                <div className="search-container">
                    <input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Input a Pokemon name or ID"
                        className="input"
                    ></input>{" "}
                    <Btn
                        text="Search"
                        clickHandle={handleSearchClick}
                        className="btn"
                    />
                </div>
                {pokemon !== "" && inputValue !== "" ? displayPokemon() : null}
            </div>
        </div>
    );
};

export default TeamBuilder;
