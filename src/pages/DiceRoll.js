import React, {useState} from 'react'
import D4Svg from '../assets/img/d4.svg'
import D6Svg from '../assets/img/d6.svg'
import D8Svg from '../assets/img/d8.svg'
import D12Svg from '../assets/img/d12.svg'
import D20Svg from '../assets/img/d20.svg'

export default function DiceRoll() {

    const [state, setState] = useState({
        dicesRef: {
            D4: {
                value: 4,
                Svg: D4Svg
            },
            D6: {
                value: 6,
                Svg: D6Svg
            },
            D8: {
                value: 8,
                Svg: D8Svg
            },
            D10: {
                value: 10,
                Svg: D12Svg
            },
            D12: {
                value: 12,
                Svg: D12Svg
            },
            D20: {
                value: 20,
                Svg: D20Svg
            }
        },
        diceTypes: ['D4', 'D6', 'D8', 'D10', 'D12', 'D20'],
        currentDiceType: 'D4',
        diceRolled: false,
        diceResult: undefined,
        modifier: 0
    });

    function rollDice() {

        const amountToRoll = state.dicesRef[state.currentDiceType].value;

        const result = Math.floor(Math.random() * amountToRoll);

        setState(
            {
                ...state,
                diceResult: result
            }
        )

    }

    function setDiceType(dice) {

        setState({
            ...state,
            currentDiceType: dice,
            diceResult: undefined
        })
    }


    const diceTypesJSX = state.diceTypes.map( (item, index) => {

        const diceSvg = state.dicesRef[item].Svg;

        const isSelectedBorderColor = item === state.currentDiceType ? " border-blue-500" : " border-black";

        const classesString = "bg-cover hover:border-blue-500 font-semibold py-2 bg-no-repeat bg-top px-4 m-2 border hover:border-transparent rounded" + isSelectedBorderColor;

        return (
            <div key={index}>
                <button onClick={() => setDiceType(item)} className={classesString}>
                    <div className="inline-flex">
                        <div>
                            <img style={{width: '32px'}} src={diceSvg} alt=""/>
                        </div>

                        <p>
                            {item}
                        </p>

                    </div>
                </button>
            </div>
        )
    });


    return (
        <section className={'container mx-auto'}>
            <h1 className={'text-center text-2xl'}>Choose A Dice Type</h1>


            <div className="flex flex-col justify-center">

                <div className={'flex flex-row m-2 justify-center'}>
                    {diceTypesJSX}
                </div>

                <div className="flex flex-row m-2 justify-center">
                    <div className={'p-10 border-2 border-black'}>
                        <h1 className={"text-2xl"}>5</h1>
                    </div>
                </div>


            </div>


        </section>
    )

}
