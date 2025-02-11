'use client'
import { Tab, Tabs } from '@/components/Tabs/Tabs';
import { getAllVideos } from '@/firebase/videos';
import { useEffect, useState } from 'react';
import "react-modal-video/scss/modal-video.scss";
import { mapVids } from '@/util/util';
export default function Home() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getAllVideos().then(videos => setVideos(videos));
    }, []);
    return (
        <section className="videos-preview">
            <div className='flex justify-center text-2xl mb-4 font-bold'>
                Projects
            </div>
            <Tabs>
                <Tab label="all">
                    <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[290px] sm:sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
                        {mapVids(videos, 'all')}
                    </div>
                </Tab>
                <Tab label="music video">
                    <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[290px] sm:sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
                        {mapVids(videos, 'music')}
                    </div>
                </Tab>
                <Tab label="fashion">
                    <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[290px] sm:sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
                        {mapVids(videos, 'fashion')}
                    </div>
                </Tab>
                <Tab label="film">
                    <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[290px] sm:sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
                        {mapVids(videos, 'film')}
                    </div>
                </Tab>
                <Tab label="commercial">
                    <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[290px] sm:sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
                        {mapVids(videos, 'commercial')}
                    </div>
                </Tab>
            </Tabs>
        </section>
    )
}