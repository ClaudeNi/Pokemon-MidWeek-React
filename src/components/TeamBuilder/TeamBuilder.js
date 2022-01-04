import React, { useState } from "react";
import Btn from "../Btn/Btn";
import "./teamBuilder.css";

const TeamBuilder = () => {
    const [showAll, setShowAll] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    // const displayPokemon = () => {
    //     return props.pokemon.getList().map((poke) => {
    //         return (
    //             <div
    //                 key={poke.id}
    //                 role={"button"}
    //                 className={`select ${poke.front_img}`}
    //                 onClick={() => {
    //                     props.handleClick(poke.id);
    //                 }}
    //             ></div>
    //         );
    //     });
    // };
    const handleAllClick = () => {
        setShowAll(true);
        setShowSearch(false);
    };

    const handleSearchClick = () => {
        setShowAll(false);
        setShowSearch(true);
    };

    return (
        <div className="team-builder">
            <div className="btns-container">
                <Btn text="Show All" clickHandle={handleAllClick} />
                <Btn text="Search By Name" clickHandle={handleSearchClick} />
            </div>
            {showAll ? <div>showing all</div> : null}
            {showSearch ? <div>showing search</div> : null}
        </div>
    );
};

export default TeamBuilder;
