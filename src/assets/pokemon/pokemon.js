class Pokemon {
    constructor(arr) {
        this.arr = arr;
    }

    get(id) {
        return this.arr.filter((pokemon) => pokemon.id === id)[0];
    }
}

const arr = [
    {
        id: 252,
        name: "Treecko",
        front_img: "treecko_front",
        back_img: "treecko_back",
        moveList: [
            {
                level: 1,
                name: "Leer",
                type: "Normal",
                category: "Status",
                power: "",
                accuracy: 100,
            },
            {
                level: 1,
                name: "Pound",
                type: "Normal",
                category: "Physical",
                power: 40,
                accuracy: 100,
            },
        ],
        evolution: {
            level: 16,
            id: 253,
        },
    },
    {
        id: 0,
        name: "",
        front_img: "",
        back_img: "",
        moveList: [
            {
                level: 1,
                name: "",
                type: "",
                category: "",
                power: "",
                accuracy: "",
            },
        ],
        evolution: {
            level: 0,
            id: 0,
        },
    },
];

const pokemonList = new Pokemon(arr);

export default pokemonList;
