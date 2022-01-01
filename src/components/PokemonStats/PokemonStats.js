import React, { useEffect, useRef, useState } from "react";
import "./pokemonStats.css";

const PokemonStats = (props) => {
    const [hp, setHp] = useState(props.pokemon.stats.hp);
    const [hpBg, setHpBg] = useState("green");
    // eslint-disable-next-line
    const [exp, setExp] = useState(props.pokemon.exp);
    // eslint-disable-next-line
    const [expBg, setExpBg] = useState();

    const hpRef = useRef();
    const expRef = useRef();

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
                {props.pokemon.name} Lv{props.pokemon.level}
            </div>
            <div className="mid">
                <div
                    ref={hpRef}
                    className="hp"
                    style={{ width: hp * 5, background: hpBg }}
                ></div>
                {props.who === "Player" ? (
                    <span>
                        {hp}/{props.maxHP}
                    </span>
                ) : null}
            </div>
            {props.who === "Player" ? (
                <div
                    ref={expRef}
                    className="exp"
                    style={{ width: hp * 5, background: hpBg }}
                ></div>
            ) : null}
        </div>
    );
};

export default PokemonStats;
