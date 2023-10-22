'use client'
import './styles.css';
import "react-modal-video/scss/modal-video.scss";
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('./Home'), {
    loading: () => <p>Loading...</p>,
})
export default function Projects() {
    return (
        <>
            <LoadingScreen duration={1000} />
            <Home />
        </>
    )
}