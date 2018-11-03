// recompose의 fromRenderProps
import React from 'react';
import { Redirect } from 'react-router-dom';
import { UserConsumer } from '../contexts/UserContext';
import { fromRenderProps } from 'recompose';

const Me = ({ logged, username }) => {
    if (!logged) {
      return <Redirect to="/login" />;
    }
    return (
        <div>
            <h1>내 정보</h1>
            <p>로그인한 계정: {username}</p>
            <p>
                로그인을 하면 어떤 계정인지 보일거고, 안하면 로그인 페이지로 이동돼요.
            </p>
        </div>
    );
};
  
export default fromRenderProps(UserConsumer, ({ state }) => ({
    logged: state.logged,
    username: state.username,
}))(Me);


// Context API Type
// import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { UserConsumer } from '../contexts/UserContext';

// const Me = () => {
//     return (
//         <UserConsumer>
//             {({ state }) => {
//                 // 비로그인시 리디렉트
//                 if(!state.logged) return <Redirect to="/login" />
//                 // 로그인시 현재 username 보여주기
//                 return (
//                     <div>
//                         <h1>내 정보</h1>
//                         <p>로그인한 계정: { state.username }</p>
//                         <p>
//                             로그인을 하면 어떤 계정인지 보일거고, 안하면 로그인 페이지로 이동돼요.
//                         </p>
//                     </div>
//                 );
//             }}
//         </UserConsumer>
//     );
// };

// export default Me;
