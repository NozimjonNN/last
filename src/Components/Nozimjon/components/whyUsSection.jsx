import React from "react";
import './WhyUsSection.css'
import '../Nozimjon.css'

import c1 from '../Img/cards/1.png'
import c2 from '../Img/cards/2.png'
import c3 from '../Img/cards/3.png'
import c4 from '../Img/cards/4.png'
import c5 from '../Img/cards/5.png'
import c6 from '../Img/cards/6.png'
import c7 from '../Img/cards/7.png'

export default function WhyUsSection() {
    return(
        <div className="all">
            <h1 className="p1-se-1"><span className="p1-se-2">7 ПРИЧИН</span> ПОЧЕМУ <br /> ИМЕННО МЫ?</h1>
            <div className="flex p1-se-3">
                <div className="miniCard">
                    <img src={ c1 } className='cardImg' alt="c1" />
                    Ты станешь востребованным специалистом в области искусственного интеллекта
                </div>
                <div className="miniCard">
                    <img src={ c2 } className='cardImg' alt="c2" />
                    Будешь создавать свои модели искусственного интеллекта на языке программирования Python
                </div>
                <div className="miniCard">
                    <img src={ c3 } className='cardImg' alt="c3" />
                    Будешь создавать свои модели искусственного интеллекта на языке программирования Python
                </div>
                <div className="miniCard">
                    <img src={ c4 } className='cardImg' alt="c4" />
                    Мы обучаем только тому, <br /> что тебе пригодится во время работы!
                </div>
            </div>
            <div className="flex p1-se-3">
                <div className="card">
                    <img className="cardImg" src={ c5 } alt="c5" />
                    Ты найдешь единомышленников, <br /> с которыми сможешь создавать свои проекты
                </div>
                <div className="card">
                    <img className="cardImg" src={ c6 } alt="c6" />
                    Мы создаём сообщество профессионалов, таких же как и мы, жаждущих развивать и изменять этот мир к лучшему с помощью IT технологий
                </div>
                <div className="card">
                    <img className="cardImg" src={ c7 } alt="c7" />
                    После успешного завершения курса, мы поможем тебе трудоустроиться <br /> в Южнокорейские IT компании!
                </div>
            </div>
        </div>
    )
}
