'use client'
import './styles.css';
import AutoplayFullscreenPlayer from '@/components/AutoplayFullscreenPlayer/AutoplayFullscreenPlayer';
import ProjectPreview from '@/components/ProjectPreview/ProjectPreview';
import TestPreview from '@/components/TestPreview/TestPreview';
import "react-modal-video/scss/modal-video.scss";
import videos from '@/data/videos';
export default function Home() {
    return (
        <>
            <AutoplayFullscreenPlayer url="https://player.vimeo.com/video/847725286" />
            <button type='button' onClick={() => setOpen(true)}>Open</button>
            <div className="grid grid-flow-row grid-cols-4 gap-12 px-72">
                {/* <ProjectPreview url="https://player.vimeo.com/video/847725844" /> */}
                {videos.map((video) => (
                    <div className="col-span-2">
                        <TestPreview video={video} />
                    </div>

                ))}
            </div>
        </>
    )
}