import iconTelegram from '../../img/icon/telegram_24px.svg';
import iconVK from '../../img/icon/vk.svg';
import iconWhatsApp from '../../img/icon/whatsapp.svg';

const Footer = () => {
    return (
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

    );
}

export default Footer;