import VideoPreview from "@/components/VideoPreview/VideoPreview";
import { storage } from "@/firebase/firebase";
import { getDownloadURL, ref } from "firebase/storage";
export function mapVids(videos, category) {
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

export const getImageUrl = async (path) => {
    const storageRef = ref(storage, path);
    const url = await getDownloadURL(storageRef);
    if (url === undefined) {
        return null;
    }
    return url;
}