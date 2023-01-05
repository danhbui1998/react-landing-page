import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './GoToTop.scss';

function GoToTop() {
    const [showGoToTop, setShowGoToTop] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 150) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showGoToTop && (
                <div className="totop" onClick={goToTop}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
            )}
        </>
    );
}

export default GoToTop;
