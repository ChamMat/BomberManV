import React from 'react';
import StyledBonus from './StyledBonus';

const Bonus = (props) => {

    const classe = props.bonusType;
    // bombBonus
    // speedBonus
    return(
        <StyledBonus props={props}>
            <div className={classe} />
        </StyledBonus>
    )
};

export default Bonus;