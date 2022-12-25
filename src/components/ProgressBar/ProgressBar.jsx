import { useEffect } from 'react';

import './ProgressBar.scss';

function ProgressBar() {
    useEffect(() => {
        const handleProgress = () => {
            let hPage = document.querySelector('body').clientHeight; // chiều cao của cả page
            let scrollY = window.pageYOffset;
            let vh = window.innerHeight; // chiều cao cửa sổ trình duyệt

            let progess = document.querySelector('.progressbar');

            let percent = Number((scrollY / (hPage - vh)) * 100);
            progess.style.width = percent + '%';
        };
        window.addEventListener('scroll', handleProgress);

        return () => {
            window.removeEventListener('scroll', handleProgress);
        };
    }, []);
    return <div className="progressbar"></div>;
}

export default ProgressBar;
