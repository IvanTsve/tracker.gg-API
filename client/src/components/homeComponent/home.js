import React, { useState, useEffect } from 'react';
import fetchData from '../../helpers/fetchData';


function Home() {

    const [data, setData] = useState([]);

   // fetchData(`https://public-api.tracker.gg/v2/csgo/standard/profile/steam/76561198008049283`)

    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch(`http://localhost:5000/weapons`);
    //         const data = await response.json();
    //         return setData(data);

    //         const res = await fetch(`https://swapi.dev/api/people/1`);
    //     }
    //     getData();
    // }, []);




    



    return  <h1>homr</h1>
}
 
export default Home;