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
                return start + lvl * 2 + 10;
        }
    };

    const maxHP = calcStats("hp", props.initialHP, props.level);
    const [hp, setHp] = useState(maxHP);
    const [hpBg, setHpBg] = useState("green");

    useEffect(() => {
        handleHealth(hp);
        gameOverCheck();
        // eslint-disable-next-line
    }, [hp]);

    useEffect(() => {
        setHp(hp - props.damage);
        // eslint-disable-next-line
    }, [props.damage]);

    const handleHealth = (currentHP) => {
        const health = (currentHP / maxHP) * 100;
        if (health <= 25) {
            setHpBg("red");
        } else if (health <= 50) {
            setHpBg("yellow");
        } else {
            setHpBg("green");
        }
        if (currentHP < 0) {
            setHp(0);
        } else {
            setHp(currentHP);
        }
    };

    const gameOverCheck = () => {
        if (hp <= 0) {
            props.handleWin();
            if (props.who === "You") {
                props.gameOverHandle("Enemy");
            } else {
                props.gameOverHandle("You");
            }
        }
    };

    return (
        <div className="container">
            <div className="top">
                {props.pokemon[0].name.toUpperCase()}{" "}
                <span>Lv{props.level}</span>
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
