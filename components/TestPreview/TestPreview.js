import { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, AdvancedVideo, lazyload } from '@cloudinary/react';
import ModalVideo from 'react-modal-video';
import './TestPreview.css'
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducminhminh'
    }

});
const TestPreview = ({ video }) => {
    const playerRef = useRef();
    const [isOpen, setOpen] = useState(false);
    function onMouseOver() {
        playerRef.current.videoRef.current.play();
    }

    function onMouseOut() {
        playerRef.current.videoRef.current.pause();
    }

    return (
        <>
            <div className='video' onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={() => setOpen(true)}>
                <AdvancedImage
                    cldImg={cld.image(video.id).setAssetType('video').delivery('q_auto').format('auto:image')}
                />
                <AdvancedVideo
                    ref={playerRef}
                    loop
                    muted
                    width="100%"
                    cldVid={cld.video(video.id).effect('e_preview:duration_4').delivery('q_auto').format('auto')}
                    plugins={[lazyload()]}
                />
            </div>
            <ModalVideo
                channel="vimeo"
                videoId={video.vimeo_id}
                isOpen={isOpen}
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default TestPreview;
