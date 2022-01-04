class Pokemon {
    constructor(arr) {
        this.arr = arr;
    }

    get(id) {
        return this.arr.filter((pokemon) => pokemon.id === id)[0];
    }

    getList() {
        return this.arr;
    }
}

const LINK =
    "https://raw.githubusercontent.com/Checchii/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated";
// const END = "?raw=true";

const arr = [
    {
        id: 252,
        name: "Treecko",
        type: "Grass",
        front_img: `${LINK}/252.gif`,
        back_img: `${LINK}/back/252.gif`,
        moveList: [
            {
                level: 1,
                name: "Leer",
                type: "Normal",
                category: "Status",
                power: "",
                accuracy: 100,
                pp: 30,
            },
            {
                level: 1,
                name: "Pound",
                type: "Normal",
                category: "Physical",
                power: 40,
                accuracy: 100,
                pp: 35,
            },
        ],
        evolution: {
            level: 16,
            id: 253,
        },
        stats: {
            hp: 40,
            attack: 45,
            defense: 35,
            spAtk: 65,
            spDef: 55,
            speed: 70,
        },
        description:
            "It makes its nest in a giant tree in the forest. It ferociously guards against anything nearing its territory. It is said to be the protector of the forest's trees.",
    },
    {
        id: 255,
        name: "Torchic",
        type: "Fire",
        front_img: "torchic_front",
        back_img: "torchic_back",
        moveList: [
            {
                level: 1,
                name: "Growl",
                type: "Normal",
                category: "Status",
                power: "",
                accuracy: 100,
                pp: 40,
            },
            {
                level: 1,
                name: "Scratch",
                type: "Normal",
                category: "Physical",
                power: 40,
                accuracy: 100,
                pp: 35,
            },
        ],
        evolution: {
            level: 16,
            id: 256,
        },
        stats: {
            hp: 45,
            attack: 60,
            defense: 40,
            spAtk: 70,
            spDef: 50,
            speed: 45,
        },
        description:
            "If attacked, it strikes back by spitting balls of fire it forms in its stomach. A TORCHIC dislikes darkness because it can't see its surroundings.",
    },
    {
        id: 258,
        name: "Mudkip",
        type: "Water",
        front_img: "mudkip_front",
        back_img: "mudkip_back",
        moveList: [
            {
                level: 1,
                name: "Growl",
                type: "Normal",
                category: "Status",
                power: "",
                accuracy: 100,
                pp: 40,
            },
            {
                level: 1,
                name: "Tackle",
                type: "Normal",
                category: "Physical",
                power: 40,
                accuracy: 100,
                pp: 35,
            },
        ],
        evolution: {
            level: 16,
            id: 259,
        },
        stats: {
            hp: 50,
            attack: 70,
            defense: 50,
            spAtk: 50,
            spDef: 50,
            speed: 40,
        },
        description:
            "On land, it can powerfully lift large boulders by planting its four feet and heaving. It sleeps by burying itself in soil at the water's edge.",
    },
    {
        id: 263,
        name: "Zigzagoon",
        type: "Normal",
        front_img: "Zigzagoon_front",
        back_img: "Zigzagoon_back",
        moveList: [
            {
                level: 1,
                name: "Growl",
                type: "Normal",
                category: "Status",
                power: "",
                accuracy: 100,
                pp: 40,
            },
            {
                level: 1,
                name: "Tackle",
                type: "Normal",
                category: "Physical",
                power: 40,
                accuracy: 100,
                pp: 35,
            },
        ],
        evolution: {
            level: 20,
            id: 264,
        },
        stats: {
            hp: 38,
            attack: 30,
            defense: 41,
            spAtk: 30,
            spDef: 41,
            speed: 60,
        },
        description:
            "Rubbing its nose against the ground, it always wanders about back and forth in search of something. It is distinguished by the zigzag footprints it leaves.",
    },
    {
        id: 261,
        name: "Poochyena",
        type: "Dark",
        front_img: "Poochyena_front",
        back_img: "Poochyena_back",
        moveList: [
            {
                level: 1,
                name: "Tackle",
                type: "Normal",
                category: "Physical",
                power: 40,
                accuracy: 100,
                pp: 35,
            },
            {
                level: 1,
                name: "Howl",
                type: "Normal",
                category: "Status",
                power: "",
                accuracy: 100,
                pp: 40,
            },
        ],
        evolution: {
            level: 18,
            id: 262,
        },
        stats: {
            hp: 35,
            attack: 55,
            defense: 35,
            spAtk: 30,
            spDef: 30,
            speed: 35,
        },
        description:
            "It savagely threatens foes with bared fangs. It chases after fleeing targets tenaciously. It turns tail and runs, however, if the foe strikes back.",
    },
];

const pokemonList = new Pokemon(arr);

export default pokemonList;

// pokemon template
// {
//     id: 0,
//     name: "",
//     type: "",
//     front_img: "",
//     back_img: "",
//     moveList: [
//         {
//             level: 1,
//             name: "",
//             type: "",
//             category: "",
//             power: "",
//             accuracy: "",
//         },
//     ],
//     evolution: {
//         level: 0,
//         id: 0,
//     },
//     stats: {
//         hp: 0,
//         attack: 0,
//         defense: 0,
//         spAtk: 0,
//         spDef: 0,
//         speed: 0,
//     },
//     description: "",
// },
