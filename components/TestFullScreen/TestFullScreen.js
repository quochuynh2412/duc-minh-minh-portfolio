import classes from './TestFullScreen.module.css';
import { useRef } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducminhminh'
    }

});
export default function TestFullScreen({ video }) {
    const playerRef = useRef();
    return (
        <AdvancedVideo
            ref={playerRef}
            loop
            muted
            autoPlay
            width="100%"
            cldVid={cld.video(video.cloudinary_id).delivery('q_auto').format('auto')}></AdvancedVideo>
    )
}