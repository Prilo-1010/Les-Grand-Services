
import '../styles/Portfolio.css';
import { Button } from './Button';
import pic from '../images/background2.jpg'
import { useState } from 'react';

const Work = ({ portfolios }) => {
    const [click, setClick] = useState(true);

    const handleClick = () => setClick(false);

    return (
        <>
            {portfolios.map((portfolio) => (
                <div key={portfolio.id} class="work-container" style={{ backgroundImage: `url(${pic})`, }}>
                    <div class="overlay-work">
                        <div class="items"></div>
                        <div class="items header">
                            <p>{portfolio.title}</p>
                        </div>
                        <div class="items header">
                            <a href={`#${portfolio.title}`}>
                                <Button
                                    buttonStyle='btn-other'
                                    buttonSize='btn-medium'
                                >
                                    View
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
            {click && <div id={`${portfolios.title}`} className="overlay">
                            <div className="popup">
                                <i className="close" onClick={handleClick}>&times;</i>
                                <div className="content">
                                    {portfolios.type}
                                </div>
                            </div>
                        </div>}
        </>
    );
}

export default Work