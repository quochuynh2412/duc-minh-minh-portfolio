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
    try {
        const url = await getDownloadURL(storageRef);
        return url;
    } catch {
        return null;
    }
}
const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function triplet(e1, e2, e3) {
    return (
        keyStr.charAt(e1 >> 2) +
        keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
        keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
        keyStr.charAt(e3 & 63)
    );
}

export function rgbDataURL(r, g, b) {
    return `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
}
