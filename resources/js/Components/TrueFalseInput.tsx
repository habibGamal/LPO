import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react"

export default function TrueFalseInput({ id, correction }: { id: string, correction?: string }) {
    const [value, setValue] = useState<string>();
    enum Active {
        True = 'true',
        False = 'false',
    }
    const check = (cond: string) => value === cond ? 'text-second' : 'text-transparent'

    return (
        <div className="flex flex-col gap-4 ml-4">
            <label htmlFor={`${id}-a-1`} className="flex cursor-pointer items-center gap-2 text-xl relative">
                <span className="relative flex justify-center items-center w-5 aspect-square border bg-white border-main">
                    <FontAwesomeIcon icon={faCheck} className={check(Active.True)} size='sm' />
                    <input required className="absolute top-1 right-0 z-[-1]" onChange={(e) => setValue(e.target.value)} id={`${id}-a-1`} type="radio" name={id} value="true" />
                </span>
                <span className={correction === 'true' ? 'bg-green-600 text-white rounded p-1' : ''}>
                    صح
                </span>
            </label>
            <label htmlFor={`${id}-a-2`} className="flex cursor-pointer items-center gap-2 text-xl relative">
                <span className="relative flex justify-center items-center w-5 aspect-square border bg-white border-main">
                    <FontAwesomeIcon icon={faCheck} className={check(Active.False)} size='sm' />
                    <input required className="absolute top-1 right-0 z-[-1]" onChange={(e) => setValue(e.target.value)} id={`${id}-a-2`} type="radio" name={id} value="false" />
                </span>
                <span className={correction === 'false' ? 'bg-green-600 text-white rounded p-1' : ''}>
                    خطأ
                </span>
            </label>
        </div>
    )
}
