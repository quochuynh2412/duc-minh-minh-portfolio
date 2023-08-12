'use client'
import Scene from "@/components/Scene/Scene";
import styles from './styles.module.css';
export default function Home() {
    return (
        <>
            <div className={styles.root}>
                <section className={styles.contact}>
                    <div className={styles.canvas}>
                        <Scene />
                    </div>
                </section>
            </div >
        </>
    );
}