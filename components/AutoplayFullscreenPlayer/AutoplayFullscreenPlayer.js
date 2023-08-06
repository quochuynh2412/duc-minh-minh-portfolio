import classes from './AutoplayFullscreenPlayer.module.css';
import { useRef, useEffect } from 'react';
export default function AutoplayFullscreenPlayer({ url }) {
    const iframeRef = useRef(null);
    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe || !window.Vimeo || !window.Vimeo.Player) {

            const player = new window.Vimeo.Player(iframe);

            player.setVolume(0); // Mute the video
            player.play(); // Start playing the video
        }
    }, []);
    return (
        <div className={classes.videoplayer}>
            <iframe ref={iframeRef} src={url + "?title=0&byline=0&portrait=0&transparent=0&autoplay=1&muted=1&loop=1&autopause=0"} style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen ></iframe>
            {/* <div class={classes.overlay}></div> */}
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
    )
}