'use client'
import React, { useEffect, createRef } from 'react';
import styles from './LoadingScreen.module.css';
import { SpringRef, Controller, animated } from '@react-spring/web'
export default class LoadingScreen extends React.Component {
    isShowing = createRef(false)
    api = SpringRef()
    animations = new Controller({ opacity: 0, ref: this.api })
    //fade out loading screen after 3 seconds using css styles
    // useEffect(() => {
    //     setTimeout(() => {
    //         this.animations.start({ opacity: this.isShowing ? 1 : 0 })
    //         this.isShowing = !this.isShowing
    //         // setLoading(false);
    //     }, 3000);
    // }, []);
    componentDidMount() {
        this.animations.start({
            display: this.isShowing ? 'block' : 'none',
            opacity: this.isShowing ? 1 : 0,
        })
        this.isShowing = !this.isShowing
        setTimeout(() => {
            this.animations.start({
                opacity: this.isShowing ? 1 : 0,
                onRest: () => {
                    this.animations.start({
                        display: this.isShowing ? 'block' : 'none',
                    })
                }
            })
            this.isShowing = !this.isShowing
            // setLoading(false);
        }, 3000);
    }
    render() {
        return (
            <animated.div className={`${styles.loadingScreen} w-screen h-screen fixed z-[250] top-0 left-0 bg-black`} style={this.animations.springs}>
                <div className="flex flex-col justify-center items-center h-full">
                    <img src="/dmm-logo.svg" alt="logo" className="w-8 animate-spin" />
                    {/* loading text */}
                    <div className="text-white text-xl font-bold mt-4">Loading</div>
                </div>
            </animated.div>
        )
    }
}
