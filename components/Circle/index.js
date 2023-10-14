import { useEffect, useState } from 'react';

const Circle = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const circleContainer = document.querySelector('.circle-container');

        const handleMouseMove = (e) => {
            const { top, left, width, height } = circleContainer.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            // Calculate the angle between the center of the larger circle and the mouse position
            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

            // Calculate the position of the smaller circle's center on the outline of the larger circle
            const radius = width / 2 - 72; // Adjust the smaller circle's distance from the bigger one here
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            setPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="circle-container relative h-48 w-48">
            <div
                className="w-48 h-48 bg-white rounded-full absolute top-0 left-0"
            ></div>
            <div
                className="w-12 h-12 bg-yellow-400 rounded-full absolute"
                style={{
                    top: position.y - 6 + 'px',
                    left: position.x - 6 + 'px',
                }}
            ></div>
        </div>
    );
};

export default Circle;
