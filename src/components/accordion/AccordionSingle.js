import React, { useState } from 'react'

export default function AccordionSingle({ id, name, info, image }) {
    const [isQuestionHide, setIsQuestionHide] = useState(true)
    return (
        <div className='question'>
            <h3>{name}</h3>
            <header>
                <p>
                    {isQuestionHide ? '' : info}
                    <button className='btn' onClick={() => setIsQuestionHide(!isQuestionHide)}>{isQuestionHide ? '+' : '-'}</button>
                </p>
            </header>
        </div>
    )

}
