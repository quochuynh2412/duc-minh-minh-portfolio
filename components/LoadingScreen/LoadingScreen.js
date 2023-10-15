'use client'
import React from 'react';
import styles from './LoadingScreen.module.css';
import { SpringRef, Controller, animated } from '@react-spring/web'
export default class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    api = SpringRef()
    animations = new Controller({ opacity: 1, display: 'block', ref: this.api, config: { duration: 500 } })
    componentDidMount() {
        setTimeout(() => {
            this.animations.start({
                opacity: 0,
                onRest: () => {
                    this.animations.start({
                        display: 'none',
                    })
                }
            })
        }, this.props.duration);
    }
    render() {
        return (
            <animated.div className={`${styles.loadingScreen} w-screen h-screen fixed z-[250] top-0 left-0 bg-black`} style={this.animations.springs}>
                <div className="flex flex-col justify-center items-center h-full">
                    <img src="/dmm-logo.svg" alt="logo" className="w-8 animate-spin" />
                    {/* loading text */}
                    <div className="text-white text-xl font-bold mt-4">Loading</div>
                    <div className="text-white text-sm font-normal mt-4 max-w-[80vw] sm:max-w-full text-center">This website performs best on desktop devices and Chrome browser</div>
                </div>
            </animated.div>
        )
    }
}
