import myPhoto from '../../img/photo/photo.png';
import iconGithub from '../../img/icon/github.svg';
import iconTelegram from '../../img/icon/telegram_24px.svg';
import iconVK from '../../img/icon/vk.svg';

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="container">
                <div className="card-container">
                    <div className="main-information">
                        <div className="my-photo-container">
                            <img src={myPhoto} alt="" className="my-photo" />
                        </div>
                        <div className="text">
                            <div>
                                <p className="name">Деханова Виктория</p>
                                <p>20 лет</p>
                            </div>
                            <div className="from">
                                <p className="title">Место жительства</p>
                                <p>Россия,воронеж</p>
                            </div>
                            <div className="education">
                                <p className="title">Учебное заведение</p>
                                <p>ВГТУ - Воронежский Государственный Технический Университет
                                    2022-2026 </p>
                            </div>
                        </div>
                        <div className="icon">
                            <a href="#" className="icon1"><img src={iconGithub} alt="" /></a>
                            <a href="#" className="icon2"><img src={iconTelegram} alt="" /></a>
                            <a href="#" className="icon3"><img src={iconVK} alt="" /></a>
                        </div>
                    </div>
                    <a href="#" className="button">Написать</a>
                </div>

                <div className="my-information">
                    <h3>обо мне</h3>
                    <p>Я Деханова Виктория
                        Фрилансер
                        Начинающий Frontend-разработчик
                        и Web-дизайнер</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;