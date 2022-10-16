import React, {useState, useEffect} from 'react'
import './GetData.css'

const url = 'https://api.github.com/users'

export default function GetData() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsers = async()=> {
        setLoading(true)
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users)
        console.log(users)     
    }

    // useEffect(()=> { getUsers() }, [])
    useEffect(() => {
        fetch(url).then((response) => response.json()).then ((users) => setUsers(users)).catch(() => console.error())
    }, [])

    function removeUser (userId) {
        const newUsers = users.filter((user)=> user.id !== userId)
        setUsers(newUsers)
    }
    
    // if (loading) {

    // }
    // else{

    // }
    return(
        users.map((user) => {
            // const { login, id, node_id, avatar_url, 
            //     gravatar_id, url, html_url, followers_url, 
            //     following_url, gists_url, starred_url, 
            //     subscriptions_url, organizations_url, 
            //     repos_url, events_url, 
            //     received_events_url, 
            //     type, site_admin } = user;
            const {id, login, avatar_url} = user
            
            
                return (
                    <div key={user.id} className='div'>
                    <img src={user.avatar_url} />
                    <p>{user.login}</p>
                    <button onClick={()=> removeUser (user.id)}>Delete</button>
                </div>
            );        
        })
    );
}
