'use client'
import './styles.css';
import React from 'react';
import AutoplayFullscreenPlayer from '@/components/AutoplayFullscreenPlayer/AutoplayFullscreenPlayer';
// import TestFullScreen from '@/components/TestFullScreen/TestFullScreen';
import VideoPreview from '@/components/VideoPreview/VideoPreview';
import Scene from '@/components/Scene/Scene';
import "react-modal-video/scss/modal-video.scss";
// import videos from '@/data/videos';
import { Tabs, Tab } from '@/components/Tabs/Tabs';
import { db } from '@/firebase/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
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
    return (
        <>
            <section className='highlight-video'>
                <AutoplayFullscreenPlayer url="https://player.vimeo.com/video/847725286" />
                {/* <TestFullScreen video={videos[0]} /> */}
            </section>
            <section className="videos-preview">
                <Tabs>
                    <Tab label="Music Video">
                        <div className="grid grid-flow-row grid-cols-4 gap-12 px-72">
                            {videos.map((video) => (
                                <div className="col-span-2">
                                    <VideoPreview video={video} />
                                </div>

                            ))}
                        </div>
                    </Tab>
                    <Tab label="Fashion">
                        <div className="grid grid-flow-row grid-cols-4 gap-12 px-72">
                            {videos.filter(video => video.category === 'fashion').map((video) => (
                                <div className="col-span-2">
                                    <VideoPreview video={video} />
                                </div>

                            ))}
                        </div>
                    </Tab>
                    <Tab label="Film">
                        <div className="grid grid-flow-row grid-cols-4 gap-12 px-72">
                            {videos.filter(video => video.category === 'film').map((video) => (
                                <div className="col-span-2">
                                    <VideoPreview video={video} />
                                </div>

                            ))}
                        </div>
                    </Tab>
                    <Tab label="Commercial">
                        <div className="grid grid-flow-row grid-cols-4 gap-12 px-72">
                            {videos.filter(video => video.category === 'commercial').map((video) => (
                                <div className="col-span-2">
                                    <VideoPreview video={video} />
                                </div>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </section>
            <section className="contact">
                <Scene />
            </section>
        </>
    )
}