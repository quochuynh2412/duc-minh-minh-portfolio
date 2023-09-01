'use client'
import './styles.css';
import { Tab, Tabs } from '@/components/Tabs/Tabs';
import VideoPreview from '@/components/VideoPreview/VideoPreview';
import { getVideos } from '@/firebase/videos';
import { useEffect, useState } from 'react';
import "react-modal-video/scss/modal-video.scss";
import { mapVids } from '@/util/util';
export default function Projects() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos().then(videos => setVideos(videos));
    }, []);
    return (
        <>
            <section className="videos-preview">
                <div className='flex justify-center text-2xl mb-4 font-bold'>
                    Project Highlights
                </div>
                <Tabs>
                    <Tab label="all">
                        <div className="grid grid-flow-row grid-cols-3 gap-3 px-72">
                            {mapVids(videos, 'all')}
                        </div>
                    </Tab>
                    <Tab label="music video">
                        <div className="grid grid-flow-row grid-cols-3 gap-3 px-72">
                            {mapVids(videos, 'music')}
                        </div>
                    </Tab>
                    <Tab label="fashion">
                        <div className="grid grid-flow-row grid-cols-3 gap-3 px-72">
                            {mapVids(videos, 'fashion')}
                        </div>
                    </Tab>
                    <Tab label="film">
                        <div className="grid grid-flow-row grid-cols-3 gap-3 px-72">
                            {mapVids(videos, 'film')}
                        </div>
                    </Tab>
                    <Tab label="commercial">
                        <div className="grid grid-flow-row grid-cols-3 gap-3 px-72">
                            {mapVids(videos, 'commercial')}
                        </div>
                    </Tab>
                </Tabs>
            </section>
        </>
    )
}