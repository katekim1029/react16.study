import React from 'react';
import Steps from './Steps';

const App = () => {
    return (
        <Steps>
            <Steps.Step>
                <h2>약관 동의</h2>
                <p>여기선 약관 동의를 받고</p>
            </Steps.Step>
            <Steps.Step>
                <h2>가입 양식</h2>
                <p>아이디, 이메일, 기본적인 정보들을 받고</p>
            </Steps.Step>
            <Steps.Step>
                <h2>추가 정보</h2>
                <p>필수가 아닌 정보들을 더 받고</p>
            </Steps.Step>
            <Steps.Step>
                <h2>환영합니다!</h2>
                <p>뭐 이런 흐름으로 하면 된다는 것이죠!</p>
            </Steps.Step>
        </Steps>
    );
};

export default App;


// import React, { Component } from 'react';
// import Tabs from './Tabs';

// class App extends Component {
//     render() {
//         return (
//             <Tabs>
//                 <Tabs.Tab name="tab1" text="첫번째 탭">
//                     안녕하세요! 이건 첫번째 탭이죠.
//                 </Tabs.Tab>
//                 <Tabs.Tab name="tab2" text="둘째 탭">
//                     이것은 두번째 탭이에요
//                 </Tabs.Tab>
//                 <Tabs.Tab name="tab3" text="세번째 탭">
//                     이건 세번째네요
//                 </Tabs.Tab>
//                 <Tabs.Tab name="tab4" text="네번째 탭">
//                     사실 네번째 탭이 마지막입니다.
//                 </Tabs.Tab>
//             </Tabs>
//         );
//     }
// }

// export default App;
