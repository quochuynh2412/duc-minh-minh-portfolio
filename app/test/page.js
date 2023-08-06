'use client'
import './styles.css';
import AutoplayFullscreenPlayer from '@/components/AutoplayFullscreenPlayer/AutoplayFullscreenPlayer';
import TestPreview from '@/components/TestPreview/TestPreview';
import "react-modal-video/scss/modal-video.scss";
import videos from '@/data/videos';
import { Tabs, Tab, TabButtons } from '@/components/Tabs/Tabs';
export default function Home() {
    return (
        <>
            <section className='highlight-video'>
                <AutoplayFullscreenPlayer url="https://player.vimeo.com/video/847725286" />
            </section>
            <section className="videos-preview">
                <Tabs>
                    <Tab label="Music Video">
                        <div className="grid grid-flow-row grid-cols-4 gap-12 px-72">
                            {/* <ProjectPreview url="https://player.vimeo.com/video/847725844" /> */}
                            {videos.filter(video => video.category === 'music').map((video) => (
                                <div className="col-span-2">
                                    <TestPreview video={video} />
                                </div>

                            ))}
                        </div>
                    </Tab>
                    <Tab label="Fashion">
                        <div className="grid grid-flow-row grid-cols-4 gap-12 px-72">
                            {/* <ProjectPreview url="https://player.vimeo.com/video/847725844" /> */}
                            {videos.filter(video => video.category === 'fashion').map((video) => (
                                <div className="col-span-2">
                                    <TestPreview video={video} />
                                </div>

                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </section>
        </>
    )
}