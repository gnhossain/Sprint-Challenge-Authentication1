import React, { useEffect, useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import Logout from './Logout';

const JokesList = () => {

    const [jokes, setJokes] = useState([]);

    useEffect( () => {
        axiosWithAuth()
        .get('/api/jokes')
        .then(res => {
            console.log(res.data);
            setJokes(res.data);
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <div>
        <Logout/>
       
        <div className="jokesContainer" style={{display:"flex", width:"600px", flexWrap:"wrap", margin:"auto"}} >
            {jokes.map( joke =>
                <div className={`joke ${joke.id}`} style={{height:"200px", width:"100px"}}>
                    <p>{joke.joke}</p>
                </div>
            )}
        </div>
    </div> 
    )
}

export default JokesList
