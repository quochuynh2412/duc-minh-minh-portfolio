import './styles.css';
import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
export default function About() {
    return (
        <>
            <LoadingScreen duration={1000} />
            <section className="about h-screen max-h-screen">
                <div className='flex justify-center text-2xl mb-4 font-bold'>
                    About Me
                </div>
                <div className='grid grid-cols-2 gap-6 mx-auto h-full max-w-screen-lg justfify-center'>
                    <div className='self-center relative'>
                        <Image src="/dmm-logo.svg" className="animate-[spin_3s_linear_infinite] mx-auto" alt="contact" width={250} height={250} />
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h3 className='text-xl font-bold'>Vu Minh Duc</h3>
                        <p className='text-sm'>Video Editor</p>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </section>
        </>
    )
}