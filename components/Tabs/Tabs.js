import React from 'react';
import styles from './Tabs.module.css';
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
        <div className={styles.tabButtons + " flex justify-center gap-4"}>
            {buttons.map(button => {
                return <button className={button === activeTab ? styles.button + ' ' + styles.active : styles.button} onClick={() => changeTab(button)}>{button}</button>
            })}
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