'use client'
import './styles.css';
import React from 'react';
import AutoplayFullscreenPlayer from '@/components/AutoplayFullscreenPlayer/AutoplayFullscreenPlayer';
// import TestFullScreen from '@/components/TestFullScreen/TestFullScreen';
import VideoPreview from '@/components/VideoPreview/VideoPreview';
import "react-modal-video/scss/modal-video.scss";
// import videos from '@/data/videos';
import { Tabs, Tab } from '@/components/Tabs/Tabs';
import { db } from '@/firebase/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
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
            <LoadingScreen />
            <section className='highlight-video'>
                <AutoplayFullscreenPlayer url="https://player.vimeo.com/video/847725286" />
                {/* <TestFullScreen video={videos[0]} /> */}
            </section>
            <section className="videos-preview">
                <div className='flex justify-center text-2xl mb-4 font-bold'>
                    Project Highlights
                </div>
                <Tabs>
                    <Tab label="music video">
                        <div className="grid grid-flow-row grid-cols-3 gap-3 px-72">
                            {mapVids('music')}
                        </div>
                    </Tab>
                    <Tab label="fashion">
                        <div className="grid grid-flow-row grid-cols-3 gap-3 px-72">
                            {mapVids('fashion')}
                        </div>
                    </Tab>
                    <Tab label="film">
                        <div className="grid grid-flow-row grid-cols-3 gap-3 px-72">
                            {mapVids('film')}
                        </div>
                    </Tab>
                    <Tab label="commercial">
                        <div className="grid grid-flow-row grid-cols-3 gap-3 px-72">
                            {mapVids('commercial')}
                        </div>
                    </Tab>
                </Tabs>
            </section>
            <section className="contact">
                <div className='flex justify-center text-2xl mb-4 font-bold'>
                    Contact
                </div>
            </section>
        </>
    )
}