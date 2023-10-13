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
      <div className="absolute top-0 left-0 w-full h-full flex flex-col sm:flex-row text-gray-400 p-4 sm:p-10 pointer-events-none justify-end sm:justify-between items-start sm:items-end text-sm leading-6">
        <div className="max-w-[288px]">
          <div className="text-xl sm:text-3xl font-bold sm:my-2 text-left">Contact</div>
          <div className="text-xs sm:text-sm text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui.
          </div>
          <div className="text-xs sm:text-sm text-left mt-5">
            Send me an email: <Link href="mailto:minhducvu301@gmail.com" className="pointer-events-auto transition-all hover:text-[#FFC939] font-bold">minhducvu301@gmail.com</Link>
          </div>
        </div>
        <div className="max-w-[288px]">
          <div className="flex justify-end gap-6 mt-5">
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
