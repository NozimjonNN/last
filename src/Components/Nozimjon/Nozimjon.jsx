import './Nozimjon.css'

import n1 from './Img/1.png'
import c1 from './Img/4.png'
import c2 from './img/5.png'
import logo from './Img/3.png'

import Navbar from './components/navbar'
import WhyUsSection from './components/whyUsSection'

export default function Nozimjon() {
    return(
        <>
            <Navbar />
            <div className="stage-1">
                <div className="flex">
                    <div className='se-con-1'>
                        <div className="se-sv-1"><div className="se-sv-2"><img src={ n1 } alt="logo_headphones" /></div></div>
                        <div className='se-2'><span>БЕСПЛАТНАЯ КОНСУЛЬТАЯ</span></div>
                    </div>
                    <div className='se-con-2'>
                        <img src={ logo } alt="logo" />
                        <p className='se-3'>Добро пожаловать в онлайн школу </p>
                        <h1 className="se-4">VeraVla edu!</h1>
                        <p className="se-5">Переквалифицируйся в разработчика искусственного интеллекта <br /> и получи высокооплачиваемую работу</p>
                        <div>
                            <div className="flex se-con-2">
                                <div className="se-6"><img src={ c1 } alt="c1" /></div>
                                <div>
                                    <span className='se-7'>Мы обучаем с гарантией! </span><br />
                                    <p className='se-8'>Первый месяц действует гарантия 100% <br /> возврата денег, если тебя не устроят наши курсы</p>
                                </div>
                            </div>
                            <button className="btn">Записаться на ознакомительный вебинар</button>
                        </div>
                    </div>
                    <div className="se-con-3">
                        <img src={ c2 } className='se-9' alt="c2" /><span className='se-7'>+ 82 (10) 7526-9192</span>
                    </div>
                </div>
            </div>
                <div className="stage-2"><WhyUsSection /></div>
                <div className="stage-3">
                    <h1 className="p1-se-1"><span className="p1-se-2">ИСКУССТВЕННЫЙ <br /> ИНТЕЛЕКТ</span> - ЭТО КРУТО?</h1>
                </div>
        </>
    )
}
