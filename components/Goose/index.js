import React, { useEffect, useState } from 'react';
import styles from './Goose.module.css';

const Goose = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const moveGoose = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Generate random positions within the viewport
            const newLeft = Math.random() * (viewportWidth - 100);
            const newTop = Math.random() * (viewportHeight - 100);

            setPosition({ left: newLeft, top: newTop });
        };

        const interval = setInterval(moveGoose, 5000); // Change position every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.goose} style={{ top: position.top, left: position.left }}>
            {/* Your goose content */}
        </div>
    );
};

export default Goose;
