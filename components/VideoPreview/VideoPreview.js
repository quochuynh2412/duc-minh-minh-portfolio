import { useState, useEffect, useRef } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, AdvancedVideo, lazyload } from '@cloudinary/react';
import ModalVideo from 'react-modal-video';
import { getImageUrl } from '@/util/util';
import './VideoPreview.css'
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducminhminh'
    }

});
function VideoPreview({ video }) {
    const playerRef = useRef();
    const [isOpen, setOpen] = useState(false);
    const [url, setUrl] = useState('');
    function onMouseOver() {
        playerRef.current.videoRef.current.play();
    }

    function onMouseOut() {
        playerRef.current.videoRef.current.pause();
    }
    useEffect(() => {
        getImageUrl(`/thumbnails/${video.id}.${video.thumbnailType}`).then((url) => {
            setUrl(url);
        })
    })

    return (
        <>
            <div className='video m-4' onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={() => setOpen(true)}>
                {url == '' ? <div className='w-full h-full bg-gray-300 animate-pulse'></div> :
                    url !== null ? <img src={url} alt={video.title} /> :
                        <AdvancedImage
                            cldImg={cld.image(video.cloudinary_id).setAssetType('video').delivery('q_auto').format('auto:image')} />
                }
                <AdvancedVideo
                    ref={playerRef}
                    loop
                    muted
                    width="100%"
                    cldVid={cld.video(video.cloudinary_id).effect('e_preview:duration_4').delivery('q_auto').format('auto')}
                    plugins={[lazyload()]} />
            </div>
            <ModalVideo
                channel={video.channel}
                videoId={video.id}
                isOpen={isOpen}
                onClose={() => setOpen(false)} />
        </>
    );
}

export default VideoPreview;
