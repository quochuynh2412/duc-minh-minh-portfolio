import React from 'react';
import styles from './Tabs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
export class Tabs extends React.Component {
    state = {
        activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {

        this.setState({ activeTab: tab });
    };
    render() {

        let content;
        let buttons = [];
        return (
            <div>
                {React.Children.map(this.props.children, child => {
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) content = child.props.children
                })}

                <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
                <div className={styles.tabContent}>{content}</div>
            </div>
        );
    }
}

export const TabButtons = ({ buttons, changeTab, activeTab }) => {

    return (
        <div className={"mb-12 flex justify-center gap-0 sm:gap-4 max-w-[80vw] flex-wrap shrink-0 mx-auto"}>
            {buttons.map((button, index) => (
                <React.Fragment key={index}>
                    <button
                        className={`${button === activeTab ? 'pointer-events-auto font-normal text-xs sm:text-base bg-transparent py-2 px-4 rounded transition duration-200 text-[#ffca39]' : 'pointer-events-auto font-normal text-xs sm:text-base bg-transparent py-2 px-4 rounded text-opacity-100 transition duration-200 hover:text-opacity-50 hover:text-[#ffca39]'
                            }`}
                        onClick={() => changeTab(button)}
                    >
                        {button}
                    </button>
                    {
                        index != buttons.length - 1 ?
                            (<div className="flex items-center text-xs sm:text-sm">
                                {/* <FontAwesomeIcon className={styles.icon} icon={faCircle} /> */}
                                /
                            </div>) : null
                    }
                </React.Fragment>
            ))}
        </div>
    )
}

export const Tab = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}