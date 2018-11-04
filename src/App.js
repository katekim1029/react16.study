import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import { SampleProvider } from './contexts/sample';
import { AnotherProvider } from './contexts/another';
import Counter from './components/Counter';

const AppProvider = ({ contexts, children }) => contexts.reduce(
    (prev, context) => React.createElement(context, {
        children: prev
    }),
    children
);
// React.createElement() element를 JSX로 만드는게 아니라 javascript로만 만들게 될 때 사용된다 

const App = () => {
    return (
        <AppProvider 
            contexts={[SampleProvider, AnotherProvider]}
        >
            <div className="panes">
                <LeftPane />
                <RightPane />
            </div>
            <Counter />
        </AppProvider>
    );
};

// const App = () => {
//     return (
//         <AnotherProvider>
//             <SampleProvider>
//                 <div className="panes">
//                     <LeftPane />
//                     <RightPane />
//                 </div>
//                 <Counter />
//             </SampleProvider>
//         </AnotherProvider>
//     );
// };


// const App = () => {
//     return (
//         <SampleProvider>
//             <div className="panes">
//                 <LeftPane />
//                 <RightPane />
//             </div>
//             <Counter />
//         </SampleProvider>
//     );
// };

export default App;
