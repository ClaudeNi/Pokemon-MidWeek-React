import React, { useEffect, useRef, useState } from "react";
import "./pokemonStats.css";

const PokemonStats = (props) => {
    const [hp, setHp] = useState(props.pokemon.stats.hp);
    const [hpBg, setHpBg] = useState("green");
    // eslint-disable-next-line
    const [exp, setExp] = useState(props.exp);

    useEffect(() => {
        handleHealth(hp);
    });

    const handleHealth = (currentHP) => {
        const health = (currentHP / props.maxHP) * 100;
        if (health <= 25) {
            setHpBg("red");
        } else if (health <= 50) {
            setHpBg("yellow");
        } else {
            setHpBg("green");
        }
        setHp(currentHP);
    };

    return (
        <div className="container">
            <div className="top">
                {props.pokemon.name} <span>Lv{props.pokemon.level}</span>
            </div>
            <div className="mid">
                <div className="mid-container">
                    HP
                    <div className="hp-container">
                        <div
                            className="hp"
                            style={{
                                width: `${(hp / props.maxHP) * 100}%`,
                                background: hpBg,
                            }}
                        ></div>
                    </div>
                </div>
                {props.who === "Player" ? (
                    <span>
                        {hp}/{props.maxHP}
                    </span>
                ) : null}
            </div>

            {props.who === "Player" ? (
                <div className="bottom">
                    EXP
                    <div className="exp-container">
                        <div
                            className="exp"
                            style={{
                                width: `${(exp / 100) * 100}%`,
                                background: "blue",
                            }}
                        ></div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default PokemonStats;
