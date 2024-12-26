"use strict"

 let h1 = document.querySelector("h1");


 getDate()
 function getDate(){
    let date = new Date();
    let Hours = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    h1.innerHTML = `${Hours < 10 ? `0${Hours}` : Hours}: ${mins <10 ? `0${mins}`: mins}: ${sec <10 ? `0${sec}`: sec} `;

 }

 setInterval(function(){
    getDate()

 }, 1000);



