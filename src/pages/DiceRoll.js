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

    function setDiceType(event) {
        const newDiceType = event.target.value;
        setState({
            ...state,
            currentDiceType: newDiceType,
            diceResult: undefined
        })
    }

    function returnTypesOfDices() {
        return state.diceTypes.map(function (item, index) {
            return (
                <div key={index} className="column">
                    <button onClick={setDiceType} value={item} className="button">{item}</button>
                </div>
            )
        })
    }


    return (
        <section className={'container'}>
            <h1>Choose A Dice Type</h1>

            <div className="columns">
                {returnTypesOfDices()}
            </div>

            <div className="columns">
                <div className="column">
                    <h1>{state.diceResult}</h1>
                </div>
            </div>

            <div className="columns">
                <div className="column">
                    <button onClick={rollDice} className="button">
                        Roll
                    </button>
                </div>
            </div>


        </section>
    )

}
