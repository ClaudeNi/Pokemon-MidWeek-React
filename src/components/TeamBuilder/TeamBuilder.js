import React from "react";
import "./teamBuilder.css";

const TeamBuilder = (props) => {
    const displayPokemon = () => {
        return props.pokemon.getList().map((poke) => {
            return (
                <div
                    key={poke.id}
                    role={"button"}
                    className={`select ${poke.front_img}`}
                    onClick={() => {
                        props.handleClick(poke.id);
                    }}
                ></div>
            );
        });
    };
    return <div className="select-container">{displayPokemon()}</div>;
};

export default TeamBuilder;
