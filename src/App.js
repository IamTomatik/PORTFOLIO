import "./styles/main.css";

import fon from './img/fon/newfon.png';
import myPhoto from './img/photo/photo.png';
import iconGithub from './img/icon/github.svg';
import iconTelegram from './img/icon/telegram_24px.svg';
import iconVK from './img/icon/vk.svg';
import iconWhatsApp from './img/icon/whatsapp.svg';


function App() {
  return (
    <>

      <main className="main">
        <header className="header">
          <div className="container">
            <nav className="nav">
              <ul>
                <li><a href="main-content">Главная</a></li>
                <li><a href="about-me">Обо мне</a></li>
                <li><a href="portfolio">Учебные проекты</a></li>
                <li><a href="contacts">Контакты</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="main-content">
          <div className="container">
            <img src={fon} alt="" className="main-image" />
            <div className="main-title">
              <p >my</p>
              <div className="portfolio-container">
                <h1>portfolio</h1>
                <h2>2025</h2>
              </div>
            </div>
          </div>
        </section>
      </main>

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

      <section className="skill">
        <div className="container">
          <div className="my-skill">
            <h3>опыт работы/курсы</h3>
            <div className="information-container">
              <div className="information-box">
                <p>Айтилогия. Итенсив  UI/UX:Start</p>
                <p>22.01.-28.01.2025</p>
              </div>
              <div className="information-box">
                <p>Что-то еще</p>
                <p>22.01.-28.01.2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <div className="container-portfolio">
            <h3>портфолио</h3>
            <div className="filter">
              <ul>
                <li>все работы</li>
                <li>frontend</li>
                <li>web</li>
                <li>фриланс</li>
                <li>учебные</li>
              </ul>
            </div>
            <div className="work-container">
              <figure>
                <a href="#"></a>
                <figcaption>Крутое название</figcaption>
              </figure>
              <figure>
                <a href="#"><img src="" alt="" /></a>
                <figcaption>Крутое название</figcaption>
              </figure>
              <figure>
                <a href="#"><img src="" alt="" /></a>
                <figcaption>Крутое название</figcaption>
              </figure>
              <figure>
                <a href="#"><img src="" alt="" /></a>
                <figcaption>Крутое название</figcaption>
              </figure>
              <figure>
                <a href="#"><img src="" alt="" /></a>
                <figcaption>Крутое название</figcaption>
              </figure>
              <figure>
                <a href="#"><img src="" alt="" /></a>
                <figcaption>Крутое название</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <footer className="contacts">
        <div className="container">
          <div className="contacts-container">
            <h3>контакты</h3>
            <div className="contacts-box">
              <a href="#" className="contacts-button"><img src={iconTelegram} alt="" />Написать в Telegram</a>
              <a href="#" className="contacts-button"><img src={iconVK} alt="" />Написать в VK</a>
              <a href="#" className="contacts-button"><img src={iconWhatsApp} alt="" />Написать в WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>

    </>

  );
}

export default App;
