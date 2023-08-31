import { db } from '@/firebase/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
export async function getContactInfo() {
    const docs = [];
    const snapshot = await getDocs(query(collection(db, 'contact-info'), where('highlighted', '==', true)));
    snapshot.forEach(doc => {
        docs.push(doc.data());
    });
    return docs[0];
}