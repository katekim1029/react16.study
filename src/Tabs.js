import React, { Component } from 'react';
import './Tab.css';

// Tab 컴포넌트는 Tabs 컴포넌트 없이는 쓸모가 없는 컴포넌트입니다. 
// 즉, Tab 컴포넌트에 종속적입니다. 
// Tab 은 언제나 Tabs 내부에서 사용 될 것이기에 Tab 를 Tabs 의 namespaced 컴포넌트로 설정
const Tab = ({ currentTab, name, text, children }) => {
    if (currentTab !== name) { return null; }
    return (
        <div>
            <h3>{ text }</h3>
            { children }
        </div>
    );
};

class Tabs extends Component {
    static Tab = Tab;
    state = {
        currentTab: null
    };
    constructor(props) {
        super(props);
        this.state.currentTab = props.children[0].props.name;
    }
    handleClickTab = name => {
        this.setState({
            currentTab: name
        });
    };
    render() {
        const { children } = this.props;
        const { currentTab } = this.state;
        return (
            <div className="Tabs">
                <div className="select-tabs">
                    {children.map(tab => {
                        const {name, text} = tab.props;
                        return (
                            <div
                                onClick={() => this.handleClickTab(name)}
                                className={`tab-item ${name === currentTab ? 'active' : ''}`}
                                key={name}
                            >
                                {text}
                            </div>
                        );
                    })}
                </div>
                {/*
                    children 으로 사용되는 컴포넌트들에게 currentTab 값을 
                    props 로 직접 주입을 해줍니다.
                */}
                {React.Children.map(this.props.children, tab => {
                    return React.cloneElement(tab, {
                        currentTab
                    });
                })}
            </div>
        );
    }
}

export default Tabs;
