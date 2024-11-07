import './Nozimjon.css'

import n1 from './Img/1.png'
import c1 from './Img/4.png'
import c2 from './img/5.png'
import logo from './Img/3.png'
import check from './Img/7.png'
import st1 from './Img/stage-4/1.png'
import st2 from './Img/stage-4/2.png'
import st3 from './Img/stage-4/3.png'
import st4 from './Img/stage-4/4.png'

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
                    <div className="idk flex">
                        <img src={ check } className='chImg' alt="check" />
                        <p className='chText'>На данный момент только в Южной Корее ищут 10,000 специалистов в области AI!</p>
                    </div>
                    <div className="idk flex">
                        <img src={ check } className='chImg' alt="check" />
                        <p className='chText'>Младшие разработчики искусственного интеллекта без опыта работы могут получать в Южной Корее 60,000,000 вон (51,000$) в год. Специалист со средним стажем работы может получать уже около 100,000,000 вон (85,000$) в год.</p>
                    </div>
                    <div className="idk flex">
                        <img src={ check } className='chImg' alt="check" />
                        <p className='chText'>В США уровень зарплат ещё выше! Младший специалист без опыта работы получает в среднем 93,000$ в год. А инженер со средним стажем работы получает уже больше 140,000$ в год!</p>
                    </div>
                    <div className="idk flex">
                        <img src={ check } className='chImg' alt="check" />
                        <p className='chText'>А самое вкусное то, что твоя зарплата будет расти вместе с твоими навыками. Стаж не так важен.</p>
                    </div>
                    <button className='btn mt10'>Записаться на ознакомительный вебинар</button>
                </div>
                <div className="stage-4">
                  <h1 className="p1-se-1"><span className="p1-se-2">ВАЖНО</span> ПОНИМАТЬ ЧТО</h1>
                    <div className="flex aic st4 gap20">
                        <img src={ st1 } alt="st1" />
                        Искусственный интеллект - это не одна дисциплина, как думают многие, а совокупность различных между собой направлений.
                        <img src={ st2 } alt="st2" />
                        Подготовка реально хороших специалистов требует времени, краткосрочные курсы эффекта не дают.
                    </div>
                    <div className="flex aic st4 gap20">
                        Большинство менторов никогда не работали над реальными проектами. Они изучали все по видеоурокам и книжкам, и преподают без практики, что очень печально.
                        <img src={ st3 } alt="st3" />
                        На многих курсах преподают готовые/идеальные кейсы без всяких сложностей, поэтому студенты после таких курсов не могут решать реальные задачи на работе.
                        <img src={ st4 } alt="st4" />
                    </div>
                </div>
        </>
    )
}
