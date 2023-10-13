import Image from "next/image";
import styles from "./Dino.module.css";

export default function Dino() {
    return (
        <div className={styles.Dino}>
            <Image className={`pixelart ${styles.DinoSpriteSheet}`} src="/DinoSprites.png" alt="dino" width={2304} height={96} />
        </div>
    )
}
