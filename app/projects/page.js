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
                <Tabs>
                    <Tab label="All">
                        <div className="grid grid-flow-row grid-cols-4 gap-12 px-72">
                            {videos.map((video) => (
                                <div className="col-span-2">
                                    <VideoPreview video={video} />
                                </div>

                            ))}
                        </div>
                    </Tab>
                    <Tab label="Music Video">
                        <div className="grid grid-flow-row grid-cols-4 gap-12 px-72">
                            {videos.filter(video => video.category === 'music').map((video) => (
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
        </>
    )
}