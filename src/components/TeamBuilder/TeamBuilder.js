import React, { useEffect, useRef, useState } from "react";
import Btn from "../Btn/Btn";
import pokeApi from "../../api/pokeAPI";
import "./teamBuilder.css";

const TeamBuilder = () => {
    const [inputValue, setInputValue] = useState("");
    const [pokemon, setpokemon] = useState("");

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

    const displayPokemon = () => {
        return (
            <div className="pokemon-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.id} />
                <div className="line">
                    <span className="label">Name: </span>
                    {pokemon.name.toUpperCase()}
                </div>
                <div className="line">
                    <span className="label">Type: </span>
                    {pokemon.types[0].type.name.toUpperCase()}
                </div>
            </div>
        );
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
