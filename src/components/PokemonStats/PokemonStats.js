import React, { useEffect, useState } from "react";
import "./pokemonStats.css";

const PokemonStats = (props) => {
    const calcStats = (stat, base, lvl) => {
        const start = Math.floor((2 * base * lvl) / 100);
        switch (stat) {
            case "attack":
            case "defense":
            case "special-attack":
            case "special-defense":
            case "speed":
                return start + 5;
            default:
                return start + lvl + 10;
        }
    };

    const maxHP = calcStats("hp", props.initialHP, 100);
    const [hp, setHp] = useState(maxHP - props.damage);
    const [hpBg, setHpBg] = useState("green");

    useEffect(() => {
        handleHealth(hp);
    });

    const handleHealth = (currentHP) => {
        const health = (currentHP / maxHP) * 100;
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
                {props.pokemon.name.toUpperCase()}{" "}
                <span>Lv{props.pokemon.level}</span>
            </div>
            <div className="mid">
                <div className="mid-container">
                    HP
                    <div className="hp-container">
                        <div
                            className="hp"
                            style={{
                                width: `${(hp / maxHP) * 100}%`,
                                background: hpBg,
                            }}
                        ></div>
                    </div>
                </div>
                {props.who === "Player" ? (
                    <span>
                        {hp}/{maxHP}
                    </span>
                ) : null}
            </div>
        </div>
    );
};

export default PokemonStats;
