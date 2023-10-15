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
        <>
            <div className='relative h-screen w-screen bg-black'>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200vh] h-[120vh]'>
                    {/* <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1920px] md:w-[2300px] xl:w-[1920px] h-[120vh]'> */}
                    <div className='relative sm:pt-[56.25%] h-full'>
                        <iframe ref={iframeRef} src={url + "?title=0&byline=0&portrait=0&transparent=0&autoplay=1&muted=1&loop=1&autopause=0"} style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}