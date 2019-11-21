import React, {useState} from 'react'


export default function DiceRoll() {

    const [state, setState] = useState({
        dicesRef: {
            D4: 4,
            D6: 6,
            D8: 8,
            D10: 10,
            D12: 12,
            D20: 20
        },
        diceTypes: ['D4', 'D6', 'D8', 'D10', 'D12', 'D20'],
        currentDiceType: 'D4',
        diceRolled: false,
        diceResult: undefined
    });

    function rollDice (){

        const amountToRoll = state.dicesRef[state.currentDiceType];

        const result = Math.floor(Math.random() * amountToRoll);

        setState(
            {
                ...state,
                diceResult: result
            }
        )

    }

    // function returnTypesOfDices() {
    //     const diceTypesListJSX =
    // }


    return (
        <section>
            <h1>Testing</h1>
        </section>
    )

}
