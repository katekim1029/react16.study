// recompose의 fromRenderProps
import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <div>
            <h1>로그인</h1>
            <p>전혀 로그인이랑은 관계없어 보이지만.. 로그인입니다.</p>
            <LoginForm />
        </div>
    );
};

export default Login;


// Context API Type
// import React from 'react';
// import LoginForm from '../components/LoginForm';
// import { UserConsumer } from '../contexts/UserContext';

// const Login = () => {
//     return (
//         <div>
//             <h1>로그인</h1>
//             <p>전혀 로그인이랑은 관계없어 보이지만.. 로그인입니다.</p>
//             <UserConsumer>
//                 {({ actions }) => <LoginForm onLogin={actions.login} />}
//             </UserConsumer>
//         </div>
//     );
// };

// export default Login;
