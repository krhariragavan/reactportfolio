import React, {useState} from 'react'
import reminderdata from './reminderdata'
import ReminderList from './ReminderList'
import './ReminderApp.css'

export default function ReminderApp() {
    const [people, setPeople] = useState(reminderdata)
    return (
        <div>
            <section className="container">
                <h3>{people.length} Birthday Today</h3>
                <ReminderList people={people}/>
                <button onClick={()=>console.log('something')}>Clear All</button>
            </section>
        </div>
    )
}