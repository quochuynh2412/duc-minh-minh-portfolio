'use client'
import './styles.css';
import { useRef, useEffect } from 'react';
export default function Home() {
    const iframeRef = useRef(null);

    useEffect(() => {
        const iframe = iframeRef.current;

        const player = new window.Vimeo.Player(iframe);

        player.setVolume(0); // Mute the video
        player.play(); // Start playing the video

        // Handle pausing the video when the iframe loses focus (optional)
        const onBlur = () => {
            player.pause();
        };

        window.addEventListener('blur', onBlur);

        return () => {
            window.removeEventListener('blur', onBlur);
        };
    }, []);
    return (
        <section className="highlight-video-container">
            <div>
                <div className="video-player h-5/6">
                    <div style={{ padding: "56.25% 0 0 0", position: "relative" }}><iframe ref={iframeRef} src="https://player.vimeo.com/video/847725286?h=cb195d774b&autoplay=1&loop=1&title=0&byline=0&portrait=0" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </div>
            </div>
        </section>
    )
}