import React from 'react';
import StyledBonus from './StyledBonus';

const Bonus = (props) => {

    const classe = props.props.bonusType;
    // bombBonus
    // speedBonus
    return(
        <StyledBonus props={props.props}>
            <div className={classe} />
        </StyledBonus>
    )
};

export default Bonus;