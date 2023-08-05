import classes from './ProjectPreview.module.css';
import { useRef, useEffect } from 'react';
export default function ProjectPreview({ url }) {
    const iframeRef2 = useRef(null);
    useEffect(() => {
        const iframe = iframeRef2.current;
        if (!iframe || !window.Vimeo || !window.Vimeo.Player) {
            const player = new window.Vimeo.Player(iframe);
            let playTimeout;

            const onMouseEnter = () => {
                playTimeout = setTimeout(() => {
                    if (iframe) {
                        player.play();
                    }
                }, 1000); // Play the video after 1 second (adjust as needed)
            };

            const onMouseLeave = () => {
                clearTimeout(playTimeout);
                if (iframe) {
                    player.pause();
                    player.setCurrentTime(0); // Reset video time to the beginning
                }
            };
            iframe.addEventListener('mouseenter', onMouseEnter);
            iframe.addEventListener('mouseleave', onMouseLeave);

            // Clean up event listeners when the component is unmounted
            return () => {
                clearTimeout(playTimeout);
                iframe.removeEventListener('mouseenter', onMouseEnter);
                iframe.removeEventListener('mouseleave', onMouseLeave);
            };
        }
    }, []);
    return (
        <div className="col-start-2 col-span-2">
            <div className={classes.videoplayer}>
                <iframe ref={iframeRef2}
                    src={url + "?h=cb195d774b&autoplay=1&loop=1&title=0&byline=0&portrait=0"}
                    style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen />
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        </div>
    )
}