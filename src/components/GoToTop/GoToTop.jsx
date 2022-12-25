import { useState, useEffect } from 'react';
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
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
            )}
        </>
    );
}

export default GoToTop;
