import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

// 두번째 방식은 render 라는 이름 대신에 그냥 children 자체를 함수로 전달해주는 것
function App() {
    return (
        <MyComponent>
            {({ name }) => (
                <div>
                    Hello <strong>{ name }</strong>
                </div>
            )}
        </MyComponent>
    );
}

// 첫번째 방식은 "render" 라는 이름을 가진 props 를 전달하는 것
// function App() {
//     return (
//         <MyComponent 
//             render={({ name }) => (
//                 <div>
//                     Hello <strong>{ name }</strong>
//                 </div>
//             )}
//         />
//     );
// }

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
