import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import dynamic from 'next/dynamic'
const Home = dynamic(() => import('./Home'), {
    loading: () => <p>Loading...</p>,
})
export default function Contact() {
    return (
        <>
            <LoadingScreen duration={1000} />
            <Home />
        </>
    )
}
