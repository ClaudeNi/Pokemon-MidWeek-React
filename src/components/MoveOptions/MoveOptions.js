import React, { useEffect, useState } from "react";
import Options from "../Options/Options";
import "./moveOptions.css";

const MoveOptions = (props) => {
    const [pp, setPP] = useState(props.moves[0].pp);
    const [maxPP, setMaxPP] = useState(props.moves[0].pp);
    const [type, setType] = useState(props.moves[0].type.name);

    useEffect(() => {
        props.moves.forEach((move) => {
            move.currentPP = move.pp;
        });
    }, [props.moves]);

    const btnHover = (name) => {
        if (moveFind(name)[0] !== undefined) {
            setPP(moveFind(name)[0].currentPP);
            setMaxPP(moveFind(name)[0].pp);
            setType(moveFind(name)[0].type.name);
        } else {
            setPP(0);
            setMaxPP(0);
            setType("None");
        }
    };

    const moveFind = (name) => {
        return props.moves.filter(
            (move) => move.name === name.split(" ").join("-").toLowerCase()
        );
    };

    const calcDamage = (lvl, move) => {
        return Math.floor(
            ((((2 * lvl) / 5 + 2) *
                props.moves[move].power *
                (props.pokemon.stats[1].base_stat /
                    props.pokemon.stats[2].base_stat)) /
                50 +
                2) *
                Math.min(Math.random() + 0.5, 1)
        );
    };

    const moveHandl1 = () => {
        if (props.moves[0].currentPP > 0) {
            props.moves[0].currentPP--;
            setPP(props.moves[0].currentPP);
            props.dmgHandle(calcDamage(props.lvl, 0));
            props.fightHandle();
        }
    };
    const moveHandl2 = () => {
        if (props.moves[1].currentPP > 0) {
            props.moves[1].currentPP--;
            setPP(props.moves[1].currentPP);
            props.dmgHandle(calcDamage(props.lvl, 1));
            props.fightHandle();
        }
    };
    const moveHandl3 = () => {
        if (props.moves[2] !== undefined) {
            if (props.moves[2].currentPP > 0) {
                props.moves[2].currentPP--;
                setPP(props.moves[2].currentPP);
                props.dmgHandle(calcDamage(props.lvl, 2));
                props.fightHandle();
            }
        }
    };
    const moveHandl4 = () => {
        if (props.moves[3] !== undefined) {
            if (props.moves[3].currentPP > 0) {
                props.moves[3].currentPP--;
                setPP(props.moves[3].currentPP);
                props.dmgHandle(calcDamage(props.lvl, 3));
                props.fightHandle();
            }
        }
    };

    return (
        <div className={`fight-container ${props.displayClass}`}>
            <Options
                btn1={props.moves[0].name.split("-").join(" ").toUpperCase()}
                btn2={props.moves[1].name.split("-").join(" ").toUpperCase()}
                btn3={
                    props.moves[2] === undefined
                        ? "-"
                        : props.moves[2].name.split("-").join(" ").toUpperCase()
                }
                btn4={
                    props.moves[3] === undefined
                        ? "-"
                        : props.moves[3].name.split("-").join(" ").toUpperCase()
                }
                handleClick1={moveHandl1}
                handleClick2={moveHandl2}
                handleClick3={moveHandl3}
                handleClick4={moveHandl4}
                selectingMove={true}
                selected={btnHover}
            />
            <div className="pp">
                <span>{`PP ${pp}/${maxPP}`}</span>
                <span>{`Type/${type}`}</span>
            </div>
        </div>
    );
};

export default MoveOptions;
