import React from 'react'
import styles from './Overlay.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVimeoV, faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Overlay({ ready, clicked, setClicked }) {
  return (
    <>
      <div className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${clicked && 'clicked'}`}>
        <div style={{ color: "white" }} onClick={() => ready && setClicked(true)}>{!ready ? 'loading' : 'click to continue'}</div>
      </div>
      <div className={styles.contact}>
        <div className="w-72">
          <div className="text-3xl font-bold my-2">Contact</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui.
          </div>
          <div className="flex justify-start gap-6 mt-5">
            <Link href="https://www.instagram.com/ducmvx/"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.button}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="https://www.instagram.com/ducmvx/"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.button}>
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link href="https://www.instagram.com/ducmvx/"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.button}>
              <FontAwesomeIcon icon={faVimeoV} />
            </Link>
            <Link href="https://www.instagram.com/ducmvx/"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.button}>
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
