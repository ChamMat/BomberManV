export const NEW_BONUS = 'NEW_BONUS';
export const BONUS_POSY = 'BONUS_POSY'
export const RESET_BONUS = 'RESET_BONUS';

export const newBonus = (value) => {
    return ({
        type: NEW_BONUS,
        value: value,
    });
};

export const bonusPosY = () => {
    return ({
        type: BONUS_POSY,
    })
}

export const bonusReset = () => {
    return ({
        type: RESET_BONUS,
    })
}