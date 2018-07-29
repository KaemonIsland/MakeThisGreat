import React from 'react';

const ManaCost = ({ mana }) => {

    if (mana) {
        let newMana = mana.match(/[0-9a-z]/ig);
        return <div>{newMana}</div>
    } else {
        return <div>Error!</div>;
    }
}

export default ManaCost;