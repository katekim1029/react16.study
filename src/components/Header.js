// recompose의 fromRenderProps
import React from 'react';
import { Link } from 'react-router-dom';
import { UserConsumer } from '../contexts/UserContext';
import { fromRenderProps } from 'recompose';
import './Header.css';

const Header = ({ username, logged, onLogout }) => {
    return (
        <div className="Header">
            <div>
                <Link to="/">홈</Link>
                <Link to="/about">소개</Link>
                <Link to="/secrets">비밀</Link>
            </div>
            <div>
                {logged ? (
                    <>
                        <span>
                        안녕하세요
                        <b>
                            <Link to="/me">{username}</Link>
                        </b>
                        !
                        </span>
                        <span className="logout" onClick={onLogout}>
                        로그아웃
                        </span>
                    </>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </div>
        </div>
    );
};

export default fromRenderProps(UserConsumer, ({ state, actions }) => ({
    username: state.username,
    logged: state.logged,
    onLogout: actions.logout,
}))(Header);


// Context API Type
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { UserConsumer } from '../contexts/UserContext';
// import './Header.css';

// const Header = () => {
//     return (
//         <div className="Header">
//             <div>
//                 <Link to="/">홈</Link>
//                 <Link to="/about">소개</Link>
//                 <Link to="/secrets">비밀</Link>
//             </div>
//             <div>
//                 <UserConsumer>
//                     {({ state, actions }) => {
//                         // 로그인중임
//                         if(state.logged) {
//                             return (
//                                 <>
//                                     <span>
//                                         안녕하세요
//                                         <b>
//                                             <Link to="/me">{state.username}</Link>
//                                         </b>
//                                         !
//                                     </span>
//                                     <span className="logout" onClick={actions.logout}>
//                                         로그아웃
//                                     </span>
//                                 </>
//                             );
//                         };
//                         // 로그인중 아님
//                         return <Link to="/login">로그인</Link>;
//                     }}
//                 </UserConsumer>
//             </div>
//         </div>
//     );
// };

// export default Header;
