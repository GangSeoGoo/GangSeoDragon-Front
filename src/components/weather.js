import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";

export default function navbar(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[weather, setWeather] = useState(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchWeathers = async () => {
            try {
                setWeather(null);
                const response = await axios.get(
                    'https://api.openweathermap.org/data/2.5/weather?lat=35.1593&lon=128.933&appid=7c3ea03e1be24dee57900ca97c5917ec&units=metric'
                );
                setWeather(response.data.main.temp);
            } catch (e) {
                console.log(e);
            }
        }
        fetchWeathers();
    }, []);
    return(
        <h1>{weather}ºC</h1>
    )
}
