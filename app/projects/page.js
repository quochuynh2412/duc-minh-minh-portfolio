'use client'
import './styles.css';
import { Tab, Tabs } from '@/components/Tabs/Tabs';
import VideoPreview from '@/components/VideoPreview/VideoPreview';
import { getVideos } from '@/firebase/videos';
import { useEffect, useState } from 'react';
import "react-modal-video/scss/modal-video.scss";
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
                        <div className="grid grid-flow-row grid-cols-2 gap-12 px-72">
                            {videos.map((video, index) => (
                                <div className="col-span-1" key={index}>
                                    <VideoPreview video={video} />
                                </div>

                            ))}
                        </div>
                    </Tab>
                    <Tab label="music video">
                        <div className="grid grid-flow-row grid-cols-2 gap-12 px-72">
                            {videos.filter(video => video.category === 'music').map((video, index) => (
                                <div className="col-span-1" key={index}>
                                    <VideoPreview video={video} />
                                </div>

                            ))}
                        </div>
                    </Tab>
                    <Tab label="fashion">
                        <div className="grid grid-flow-row grid-cols-2 gap-12 px-72">
                            {videos.filter(video => video.category === 'fashion').map((video, index) => (
                                <div className="col-span-1" key={index}>
                                    <VideoPreview video={video} />
                                </div>

                            ))}
                        </div>
                    </Tab>
                    <Tab label="film">
                        <div className="grid grid-flow-row grid-cols-2 gap-12 px-72">
                            {videos.filter(video => video.category === 'film').map((video, index) => (
                                <div className="col-span-1" key={index}>
                                    <VideoPreview video={video} />
                                </div>

                            ))}
                        </div>
                    </Tab>
                    <Tab label="commercial">
                        <div className="grid grid-flow-row grid-cols-2 gap-12 px-72">
                            {videos.filter(video => video.category === 'commercial').map((video, index) => (
                                <div className="col-span-1" key={index}>
                                    <VideoPreview video={video} />
                                </div>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </section>
        </>
    )
}