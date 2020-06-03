const majKeyLocal = (localId, keyInput) => {

    let keys;

    const {
        p1Up,
        p1Left,
        p1Right,
        p1Bomb,
        p2Up,
        p2Left,
        p2Right,
        p2Bomb,
    } = keyInput;

    if (localId === 0) {
        keys = {
            up: p1Up,
            left: p1Left,
            right: p1Right,
            bomb: p1Bomb,
        };
    } else if (localId === 1) {
        keys = {
            up: p2Up,
            left: p2Left,
            right: p2Right,
            bomb: p2Bomb,
        };
    }

    return keys;
};

export default majKeyLocal;