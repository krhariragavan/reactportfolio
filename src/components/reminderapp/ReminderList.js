import React from 'react';
import ReminderApp from './ReminderApp';

const ReminderList = ({people}) => {    
    return (
        <>            
            {
                people.map((person) => {
                const { id, name, age, image } = person;
                return (
                <article key={id} className='person'>
                    <img src={image} alt={name} />
                    <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                    <button onClick={()=>console.log("test")}>Remove</button>
                    </div>
                </article>
                );
            })}
        </>
      );
};

// function Remind ({people}) {
//     // const 
//     return (
//         <div>
            
//         </div>
//     );
// }

export default ReminderList;