export const NEW_GAME = 'NEW_GAME';
export const NEW_BOMB = 'NEW_BOMB';
export const NEW_BONUS = 'NEW_BONUS';
export const RESET_BONUS = 'RESET_BONUS';

export const dataForMajPerso = (datas) => ({
    type: NEW_GAME,
    datas: datas,
})

export const newBomb = (bombObject) => {

    return ({
        type: NEW_BOMB,
        newBomb: bombObject,
    })
}

export const newBonus = (value) => {
    return ({
        type: NEW_BONUS,
        value: value,
    });
};

export const bonusReset = () => {
    return ({
        type: RESET_BONUS,
    })
}