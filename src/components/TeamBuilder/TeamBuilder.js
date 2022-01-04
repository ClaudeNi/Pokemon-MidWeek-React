import React, { useEffect, useRef, useState } from "react";
import Btn from "../Btn/Btn";
import pokeApi from "../../api/pokeAPI";
import "./teamBuilder.css";
import MoveItem from "../MoveItem/MoveItem";

const LINK =
    "https://raw.githubusercontent.com/Checchii/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated";

const TeamBuilder = () => {
    const [inputValue, setInputValue] = useState("");
    const [pokemon, setpokemon] = useState("");
    const [selectedMoves, setSelectedMoves] = useState([]);

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.addEventListener("keyup", handleSearch);
    });

    const fetchPokemon = async (input) => {
        const result = await pokeApi.get(`pokemon/${input}`);
        setpokemon(result.data);
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
        const result = await pokeApi.get(`move/${name}`);
        const moves = [...selectedMoves];
        if (moves.filter((move) => move.name === name)[0]) {
            const index = moves.findIndex((move) => move.name === name);
            moves.splice(index, 1);
        } else {
            moves.push(result.data);
        }

        setSelectedMoves(moves);
    };

    const handleAdd = () => {};

    const displayPokemon = () => {
        return (
            <div className="bottom">
                <div className="all-container">
                    <div className="pokemon-container">
                        <img
                            src={`${LINK}/${pokemon.id}.gif`}
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
