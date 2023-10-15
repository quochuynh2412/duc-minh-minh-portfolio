import { useState, useEffect, useRef } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, AdvancedVideo, lazyload } from '@cloudinary/react';
import ModalVideo from 'react-modal-video';
import { getImageUrl } from '@/util/util';
import Image from 'next/image';
import { rgbDataURL } from '@/util/util';
import './VideoPreview.css'
import { crop, fill, fit } from '@cloudinary/url-gen/actions/resize';
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducminhminh'
    }

});
function VideoPreview({ video }) {
    const playerRef = useRef();
    const [isOpen, setOpen] = useState(false);
    const [url, setUrl] = useState('');
    const [className, setClassName] = useState('video');
    const [autoplaySuspended, setAutoplaySuspended] = useState(false);
    function onMouseOver() {
        if (!autoplaySuspended) {
            try {
                playerRef.current.videoRef.current.play();
            } catch (e) {
                setAutoplaySuspended(true);
                setClassName('video-autoplay-suspended');
            }
        }
    }

    function onMouseOut() {
        if (!autoplaySuspended) {
            playerRef.current.videoRef.current.pause();
        }
    }
    useEffect(() => {
        getImageUrl(`/thumbnails/${video.id}.${video.thumbnailType}`).then((url) => {
            setUrl(url);
        })
    })

    return (
        <>
            <div className={`${className} m-4`} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={() => setOpen(true)}>
                {url == '' ? <div className='w-full h-full bg-gray-300 animate-pulse'></div> :
                    url !== null ? <Image src={url} alt={video.title} width={1920} height={1080} placeholder='blur' blurDataURL={rgbDataURL(128, 128, 128)} /> :
                        <AdvancedImage
                            cldImg={cld.image(video.cloudinary_id).setAssetType('video').delivery('q_auto').format('auto:image').resize(crop().height(544).aspectRatio("16:9"))} />
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
