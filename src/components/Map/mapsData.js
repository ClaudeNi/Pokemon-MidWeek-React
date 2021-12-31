const starterHouse = {
    background: "",
    battleMap: "",
    walls: [],
    npcs: [],
};

const starterTown = {
    background: "../../assets/imgs/maps/starterTown.png",
    battleMap: "",
    walls: [
        [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0,
        ],
    ],
    npcs: [],
};

const route101 = {
    background: "",
    battleMap: "../../assets/imgs/maps/grassMap.png",
    walls: [],
    npcs: [],
};

const mapData = {
    starterHouse: starterHouse,
    starterTown: starterTown,
    route101: route101,
};

export default mapData;
