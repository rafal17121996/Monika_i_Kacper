import React, { useEffect, useRef, useState } from "react";
import bemCssModules from "bem-css-modules";
import Countdown from "react-countdown";

import { default as HomeStyles } from "./Home.module.scss";

const style = bemCssModules(HomeStyles);
import bg from "../../assets/Home.jpg";

const Home = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSecounds, setTimerSecounds] = useState('00')

    let intervar = useRef()
    
    const startTimer = () =>{
        const countdownDate = new Date('July 3 2021 00:00').getTime()

        intervar = setInterval(()=>{
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000*60*60*24))
            const hours = Math.floor((distance % (1000*60*60*24) / (1000*60*60)))
            const minutes = Math.floor((distance % (1000*60*60) / (1000*60)))
            const secounds = Math.floor((distance % (1000*60) / (1000)))

            if(distance<0){
                clearInterval(intervar.current)
            }else{
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSecounds(secounds)
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(intervar.current)
        }
    })
    
  return (
    <section style={{ backgroundImage: `url(${bg})` }} className={style("")}>
      <div className={style("timer")}>
        <div className={style("title")}>
          <h2>Ślub Moniki i Kacpra</h2>
          <p>Odlicznie do najwaszniejszego dnia w naszym życiu!</p>
        </div>
        <div className={style("countdown")}>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Dni</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p>
              <small>Godziny</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p>
              <small>Minuty</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSecounds}</p>
            <p>
              <small>Sekundy</small>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Home;
