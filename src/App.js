import React, { Component } from 'react';
import NewScrollBox from './NewScrollBox';
import './App.css';

class App extends Component {
    render() {
        return (
            <NewScrollBox />
        );
    }
}

// import Hello from './Hello';
// class App extends Component {
//     render() {
//         return (
//             <Hello name = 'React' />
//         );
//     }
// }

// import LifeCycleSample from './LifeCycleSample';
// function getRandomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }
// class App extends Component {
//     state = {
//         color: '#000000'
//     }
    
//     handleClick = () => {
//         this.setState({
//             color: getRandomColor()
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>랜덤색상</button>
//                 <LifeCycleSample color={this.state.color} />
//             </div>
//         );
//     }
// }

// import ScrollBox from './ScrollBox';
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <ScrollBox ref={(ref) => this.scrollBox=ref} />
//                 <button onClick={() => this.scrollBox.scrollToBottom()}>
//                     맨 밑으로
//                 </button>
//             </div>
//         );
//     }
// }

export default App;
