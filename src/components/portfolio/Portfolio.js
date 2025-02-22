const Portfolio = () => {
    return (
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
    );
}

export default Portfolio;