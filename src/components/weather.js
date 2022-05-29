import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";

export default function Weather(){
    const [weather, setWeather] = useState([]);
    axios.defaults.withCredentials = true;
    //오늘 날짜 오전 2시보다 빠른 시각이면 그 전날의 데이터를 가져옴
    const today = new Date();
    let newdate = today.getDate();
    if(today.getHours()<2) newdate--;
    const newtoday = today.getMonth()+1>10?
    String(today.getFullYear()) + (today.getMonth()+1) + newdate:
    String(today.getFullYear()) + 0 +(today.getMonth()+1) + newdate;
    
    //강서구 오늘 날씨 api
    let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=9abgPTEvn3jushxgXzWUK1%2BT6TJN%2Fny94tG5QnJ0hmlykMvQPmC3%2FaXeZUfAZF9zvX7DafAgDqO7ObzrMr0wbQ%3D%3D&numOfRows=10&pageNo=1&base_date=${newtoday}&base_time=0200&nx=96&ny=76&dataType=JSON`;
    
    //axois 통신
    useEffect(() => {
        axios.get(url)
        .then(function(response) {
            setWeather(response.data);
            console.log("성공");
        })
        .catch(function(error) {
            console.log("실패");
        })
    }, [])
    console.log(url);
    console.log(weather.length);
    return(
        <h1>HI</h1>
    )
}