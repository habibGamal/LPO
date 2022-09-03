import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import React from "react";
export default function MultibleChoiceInput({ id, choices, correction = undefined }: { id: string, choices: Array<string>, correction?: string }) {
    const [value, setValue] = useState<string>('');
    return (
        <div className="flex flex-col gap-4 ml-4">
            {
                choices.map(
                    (choice, i) =>
                        <Choice
                            key={i}
                            qId={id}
                            id={`${id}-a-${i}`}
                            currentValue={value}
                            setValue={setValue}
                            value={choice}
                            correction={correction}
                        />
                )
            }
        </div>
    )
}

const Choice = ({ qId, id, setValue, value, currentValue, correction = undefined }: { qId: string, id: string, setValue: Function, value: string, currentValue: string, correction?: string }) => {
    const check = currentValue === id ? 'text-second' : 'text-transparent'
    const correct = id === correction ? 'bg-green-600 text-white rounded p-1' : ''

    return (
        <>
            <label htmlFor={id} className="flex cursor-pointer items-center gap-2 text-xl relative">
                <span className="flex justify-center items-center w-5 aspect-square border bg-white border-main">
                    <FontAwesomeIcon icon={faCheck} className={check} size='sm' />
                </span>
                <span className={correct}>
                    {value}
                </span>
                <input className="absolute top-1 right-0 z-[-1]" onChange={(e) => setValue(e.target.value)} id={id} type="radio" name={qId} value={id} />
            </label>
        </>
    )
}
