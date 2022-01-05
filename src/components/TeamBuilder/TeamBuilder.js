import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Btn from "../Btn/Btn";
import pokeApi from "../../api/pokeAPI";
import "./teamBuilder.css";
import MoveItem from "../MoveItem/MoveItem";

// const LINK =
//     "https://raw.githubusercontent.com/Checchii/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated";

const TeamBuilder = () => {
    const [inputValue, setInputValue] = useState("");
    const [pokemon, setpokemon] = useState("");
    const [selectedMoves, setSelectedMoves] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);

    const inputRef = useRef();

    const history = useHistory();

    useEffect(() => {
        inputRef.current.addEventListener("keyup", handleSearch);
    });

    const fetchPokemon = async (input) => {
        try {
            const result = await pokeApi.get(`pokemon/${input}`);
            setpokemon(result.data);
            const newList = [...pokemonList];
            newList.push(result.data);
            setPokemonList(newList);
        } catch (e) {
            console.log(e);
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
        try {
            const result = await pokeApi.get(`move/${name}`);
            const moves = [...selectedMoves];
            if (moves.filter((move) => move.name === name)[0]) {
                const index = moves.findIndex((move) => move.name === name);
                moves.splice(index, 1);
            } else {
                moves.push(result.data);
            }

            setSelectedMoves(moves);
        } catch (e) {
            console.log(e);
        }
    };

    const handleAdd = () => {
        if (pokemonList.length < 6) {
        }
    };

    const handleFinish = () => {
        const finalList = {
            pokemon: pokemon,
            moves: selectedMoves,
        };
        window.sessionStorage.setItem("pokemon", JSON.stringify(finalList));
        history.replace("/game/battle/custom");
    };

    const displayPokemon = () => {
        return (
            <div className="bottom">
                <div className="all-container">
                    <div className="pokemon-build-container">
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.id}
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
                <div>
                    <Btn text="Add" clickHandle={handleAdd} />
                </div>
                <Btn text="Finish" clickHandle={handleFinish} />
            </div>
        );
    };

    const displayMoves = () => {
        return pokemon.moves.map((move) => {
            return (
                <MoveItem
                    key={move.move.url}
                    move={move}
                    moveHandle={handleMoveSelect}
                    length={selectedMoves.length}
                />
            );
        });
    };

    const displaySelectedMoves = () => {
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
                </div>
            );
        });
    };

    return (
        <div className="team-builder">
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
    );
};

export default TeamBuilder;
