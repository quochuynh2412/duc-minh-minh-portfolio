'use client'
import './styles.css';
import React from 'react';
import Image from 'next/image';
import AutoplayFullscreenPlayer from '@/components/AutoplayFullscreenPlayer/AutoplayFullscreenPlayer';
import VideoPreview from '@/components/VideoPreview/VideoPreview';
import "react-modal-video/scss/modal-video.scss";
import { Tabs, Tab } from '@/components/Tabs/Tabs';
import { db } from '@/firebase/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import ScrollDownIndicator from '@/components/ScrollDownIndicator/ScrollDownIndicator';
export default function Home() {
    async function getVideos() {
        const videos = [];
        const snapshot = await getDocs(query(collection(db, 'videos'), where('highlighted', '==', true)));
        snapshot.forEach(doc => {
            videos.push(doc.data());
        });
        console.log(videos);
        return videos;
    }
    const [videos, setVideos] = React.useState([]);
    React.useEffect(() => {
        getVideos().then(videos => setVideos(videos));
    }, []);
    function mapVids(category) {
        if (category === 'all') {
            return videos.map((video, index) => (
                <div className="col-span-1" key={index}>
                    <VideoPreview video={video} />
                </div>
            ));
        }
        else {
            if (videos.filter(video => video.category.includes(category)).length === 0) {
                return (<div className="col-span-3 text-center">
                    No project yet
                </div>);
            }
            else {
                return videos.filter(video => video.category.includes(category)).map((video, index) => (
                    <div className="col-span-1" key={index}>
                        <VideoPreview video={video} />
                    </div>
                ));
            }
        }
    }
    return (
        <>
            <div className='relative'>
                <LoadingScreen duration={1000} />
                <section className='highlight-video'>
                    <AutoplayFullscreenPlayer url="https://player.vimeo.com/video/847725286" />
                    <ScrollDownIndicator />
                    {/* <TestFullScreen video={videos[0]} /> */}
                </section>
                <section className="videos-preview">
                    <div className='flex justify-center text-2xl mb-4 font-bold'>
                        Projects
                    </div>
                    <Tabs>
                        <Tab label="music video">
                            <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[290px] sm:sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
                                {mapVids('music')}
                            </div>
                        </Tab>
                        <Tab label="fashion">
                            <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[290px] sm:sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
                                {mapVids('fashion')}
                            </div>
                        </Tab>
                        <Tab label="film">
                            <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[290px] sm:sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
                                {mapVids('film')}
                            </div>
                        </Tab>
                        <Tab label="commercial">
                            <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-[290px] sm:sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
                                {mapVids('commercial')}
                            </div>
                        </Tab>
                    </Tabs>
                </section>
                <section className="contact">
                    <div className='flex justify-center text-2xl mb-4 font-bold'>
                        Contact
                    </div>
                    <div className='grid grid-cols-2 gap-6 mx-auto max-w-screen-lg'>
                        <div className='self-center relative'>
                            <Image src="/dmm-logo.svg" className="animate-[spin_3s_linear_infinite] mx-auto" alt="contact" width={250} height={250} />
                        </div>
                        <div className='flex flex-col justify-center items-start'>
                            <h3 className='text-xl font-bold'>Vu Minh Duc</h3>
                            <p className='text-sm'>Video Editor</p>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </section>
                <section>
                </section>
            </div>
        </>
    )
}