import { db } from '@/firebase/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
export async function getVideos() {
    const videos = [];
    const snapshot = await getDocs(query(collection(db, 'videos'), where('highlighted', '==', true)));
    snapshot.forEach(doc => {
        videos.push(doc.data());
    });
    console.log(videos);
    return videos;
}