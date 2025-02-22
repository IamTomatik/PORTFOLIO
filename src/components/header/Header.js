import './style.css'

const Header = () => {
    return (
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
    );
}

export default Header;