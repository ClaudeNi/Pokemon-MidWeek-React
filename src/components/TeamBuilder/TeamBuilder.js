import React, { useEffect, useRef, useState } from "react";
import Btn from "../Btn/Btn";
import pokeApi from "../../api/pokeAPI";
import "./teamBuilder.css";
import MoveItem from "../MoveItem/MoveItem";

const TeamBuilder = () => {
    const [inputValue, setInputValue] = useState("");
    const [pokemon, setpokemon] = useState("");

    const inputRef = useRef();
    // const moveRef = useRef();

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

    // const handleMoveClick = () => {
    //     console.log(moveRef.current);
    //     moveRef.current.classList.toggle("move-selected");
    // };

    const handleAdd = () => {};

    const displayPokemon = () => {
        return (
            <div className="bottom">
                <div className="all-container">
                    <div className="pokemon-container">
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
                </div>
                <div>
                    <Btn text="Add" clickHandle={handleAdd} />
                </div>
            </div>
        );
    };

    const displayMoves = () => {
        return pokemon.moves.map((move) => {
            return <MoveItem key={move.move.url} move={move} />;
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
