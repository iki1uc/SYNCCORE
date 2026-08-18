const SET = {
    base: [
        ["a","b","c"],
        ["d","e","f"],
        ["g","h","i"]
    ],

    up() {
        return this.base.slice().reverse();
    },

    down() {
        return this.base.slice();
    },

    hall() {
        return this.base[1][1]; // e
    },

    expand() {
        const up = this.up();
        const mid = this.base;
        const down = this.down();

        return [...up, ...mid, ...down];
    }
};
const lerSETI = {
    name: "lerSETI",
    role: "entry",
    state: "fluid",
    receive(input) {
        return { from: "entry", payload: input };
    }
};
const argeupheria = {
    name: "argeupheria",
    role: "meta-field",
    state: "open",
    absorb(input) {
        return { absorbed: input, layer: "argeupheria" };
    }
};
