import { useState } from 'react';

const Sidebar = () => {
    const [teams,setTeams]=useState([{name:'Besiktas',squad:['erdal, ali ,veli']}])

    return ( 
        <>
        <h1>Erdal</h1>
        <h2>
        {
            teams.filter(team=>team.hasOwnProperty('squad'))[0]['name']
            
        }
        </h2>
        </>
     );
}
 
export default Sidebar;