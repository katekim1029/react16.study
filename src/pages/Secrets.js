// recompose의 fromRenderProps
import React from 'react';
import { Redirect } from 'react-router-dom';
import { UserConsumer } from '../contexts/UserContext';
import { fromRenderProps } from 'recompose';

const Secrets = ({ logged }) => {
    return (
        <div>
            {(!logged) && <Redirect to="/login" />}
            <h1>비밀</h1>
            <p>이 페이지는 비밀스러운 페이지여서, 로그인 안하면 튕겨 나가요!</p>
        </div>
    );
};

export default fromRenderProps(UserConsumer, ({ state }) => ({
    logged: state.logged,
}))(Secrets);


// Context API Type
// import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { UserConsumer } from '../contexts/UserContext';

// const Secrets = () => {
//     return (
//         <div>
//             <UserConsumer>
//                 {({ state }) => {
//                     // state.logged 를 확인하고 이 값이 false 면 Redirect 컴포넌트로 리디렉트
//                     if(!state.logged) return <Redirect to="/login" />
//                     return null; // true 일땐 그냥 null 반환
//                 }}
//             </UserConsumer>
//             <h1>비밀</h1>
//             <p>이 페이지는 비밀스러운 페이지여서, 로그인 안하면 튕겨 나가요!</p>
//         </div>
//     );
// };

// export default Secrets;
