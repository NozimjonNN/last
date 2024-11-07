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
import plus from './Img/8.png'

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
                <div className="stage-5">
                    <h1 className="p1-se-1">ПОЧЕМУ ИМЕННО НАШ КУРС?<span className="p1-se-2"><br /> ВСЁ ПРОСТО!</span></h1>
                    <div className="idk flex gap20 v2">
                        <img src={ plus } className='chImgV2' alt="plus" />
                        <p className='chText'>Объясняем сложные вещи простым и доходчивым языком.</p>
                    </div>
                    <div className="idk flex gap20 v2">
                        <img src={ plus } className='chImgV2' alt="plus" />
                        <p className='chText'>Обучаем не просто языку программирования, или одной какой-то дисциплине, мы обучаем полностью всей специальности.</p>
                    </div>
                    <div className="idk flex gap20 v2">
                        <img src={ plus } className='chImgV2' alt="plus" />
                        <p className='chText'>Ознакомляем с содержанием урока только в режиме реального времени. Ты сможешь сразу задать вопрос и тут же получить ответы. Мы всегда будем рядом. </p>
                    </div>
                    <div className="idk flex gap20 v2">
                        <img src={ plus } className='chImgV2' alt="plus" />
                        <p className='chText'>Обучение ведет ведущий и действующий специалист в области искусственного интеллекта в Южной Корее.</p>
                    </div>
                    <div className="idk flex gap20 v2">
                        <img src={ plus } className='chImgV2' alt="plus" />
                        <p className='chText'>Обучение проходит в группе по 15 человек, которая внутри делится на 3 команды, и каждая команда выполняет собственный проект. Таким образом, студенты смогут прочувствовать тонкости командной разработки, и уже на этапе обучения окунуться в рабочую атмосферу AI специалиста.</p>
                    </div>
                    <button className="btn mt10">Записаться на ознакомительный вебинар</button>
                </div>
                <div className="stage-6">
                    <h1 className="p1-se-1"><span className="p1-se-2"><br /> ЧТО Я УЗНАЮ</span> ИЗ ЭТИХ КУРСОВ?</h1>
                    <p className="wh">Полностью весь курс состоит из 3 частей</p>
                    <div className='flex numtxt gap20 aic'><div className="num">1</div> Введиние</div>
                    <div className="wh nummini">В этой секции, мы познакомимся с историей человека, который переквалифицировался в специалиста по искусственному интеллекту и отвечаем на вопрос: "Стоит ли это того, чтобы потратить 2 года на изучение искусственного интеллекта?" Также, мы разберём уроки, усвоенные специалистами, прошедших путь от младших до главных специалистов.</div>
                    <div className='flex numtxt gap20 aic'><div className="num">2</div> Введение в программирование. </div>
                    <div className="wh nummini">Эта секция начинается с объяснения понятий проблемы, сути и целей искусственного интеллекта. Ты узнаешь в чем разница между данными и информацией. А также что такое качество информации. Мы разберём, что такое алгоритмы, компьютерные программы и язык программирования Python, и начнём работать в интегрированной среде разработки для языка Python. Далее мы поймем суть переменных их свойства и типы. Именно с этой секции ты начнёшь писать свои первые программные коды на языке программирования Python. Мы изучим все аспекты этого удивительного языка.  Далее мы разберём такие библиотеки как Numpy, Pandas и Matplotlib. В этой секции ты познакомишься со средой разработки Jupyter Notebook. </div>
                    <div className='flex numtxt gap20 aic'><div className="num">3</div> Введение в искусственный интеллект. </div>
                    <div className="wh nummini">Эта секция показывает нам, разницу между линейным и нелинейным программированием. Описывает процесс получение знаний. Также, ты узнаешь, в чем разница между AI, machine learning и deep learning. Также обсудим виды искусственного интеллекта, его применения и примеры.</div>
                    <div className='flex numtxt gap20 aic'><div className="num">4</div> Алгоритм machine learning. </div>
                    <div className="wh nummini">В этих секциях, мы подробно разберём работу алгоритмов machine learning. И ты создашь очень простую, но уже свою модель искусственного интеллекта. Также ты научишься оценивать точность моделей. В этой секции мы подробно начнём разбирать одну из библиотек искусственного интеллекта scikit learn. Здесь же мы разберём другую среду разработки, которая называется spyder.</div>
                    <div className='flex numtxt gap20 aic'><div className="num">5</div> Процесс разработки модели искусственного интеллекта и инженерия данных. </div>
                    <div className="wh nummini">Здесь мы подробно обсудим весь процесс разработки модели искусственного интеллекта. Также мы начнём изучение анализа данных и их обработки для обучения искусственного интеллекта. В этой секции я научу тебя практическим примерам анализа и обработки данных от А до Я.</div>
                    <div className='flex numtxt gap20 aic'><div className="num">6</div> Отбор фичей. </div>
                    <div className="wh nummini">В этой секции из всех данных, что у нас есть, мы научимся отбирать только те, что нам нужны для обучения искусственного интеллекта.</div>
                    <div className='flex numtxt gap20 aic'><div className="num">7</div> Чек лист почти для всех проектов искусственного интеллекта. </div>
                    <div className="wh nummini">В этой секции я дам чек лист действий для построения end-to-end проектов искусственного интеллекта.</div>
                    <div className='flex numtxt gap20 aic'><div className="num">8</div> Практические занятия. </div>
                    <div className="wh nummini">На практических занятиях мы научим наши модели искусственного интеллекта следующим вещам: предсказывать нажатие на рекламу пользователем в фейсбуке; определять рак груди; предсказывать ухода в отставку клиентов банка; определять наличие кифоза у детей; определять положительные и отрицательные отзывы yelp; определять положительные и отрицательные отзывы на амазоне; определять спам письма; предсказывать наличие болезней сердца у пациентов; определять износ деталей на токарном станке.</div>
                    <div className='flex numtxt gap20 aic'><div className="num">9</div> Deep learning: Искусственные нейронные сети. </div>
                    <div className="wh nummini">В этой секции ты узнаешь, что такое deep learning и как это работает, также ты поймешь, что такое нейроны и как нейроные сети обучаются. Мы детально разберём все процессы, связанные с нейронными сетями. Ты также познакомишься с библиотекой keras, фреймворком tensorflow и средой разработки google colab.</div>
                    <div className='flex numtxt gap20 aic'><div className="num">10</div> Deep learning: конволюционные нейронные сети</div>
                    <div className="wh nummini">В этой секции, мы познакомимся с историей человека, который переквалифицировался в специалиста по искусственному интеллекту и отвечаем на вопрос: "Стоит ли это того, чтобы потратить 2 года на изучение искусственного интеллекта?" Также, мы разберём уроки, усвоенные специалистами, прошедших путь от младших до главных специалистов</div>
                    <div className='flex numtxt gap20 aic'><div className="num">11</div> Практическое занятие. </div>
                    <div className="wh nummini">На этих занятиях ты разработаешь свои нейронные сети, которые смогут: предсказывать цены автомобилей; предсказывать выходную мощность электростанций (кейс виртуальных сенсоров); предсказывать поломки насоса на основе данных из сенсоров насоса; распознавать рукописные цифры, распознавать элементы одежды, распознавать различные объекты; распознавать повреждённые автомобили; распознавать уличные дорожные знаки для беспилотных автомобилей.</div>
                    <button className="btn mt10">Записаться на ознакомительный вебинар</button>
                </div>
        </>
    )
}
