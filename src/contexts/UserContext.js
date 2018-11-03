import React, { Component, createContext } from 'react';

// Context 를 만듭니다.
const UserContext = createContext();

// UserContext 안에 있는 Consumer 를 UserConsumer 로 네이밍을 해줍니다.
// Provider 는 우리가 하단 코드에서 이를 사용하여 UserProvider 컴포넌트를 만들게 되니 유지합니다.
const { Provider, Consumer: UserConsumer } = UserContext;

// 사용자 계정정보를 가짜로 담아뒀습니다.
const users = [
    {
        id: 1,
        username: 'react',
        password: 'good',
    },
    {
        id: 2,
        username: 'context',
        password: 'fun',
    },
];

class UserProvider extends Component {
    // UserProvider 에서 다룰 상태입니다.
    state = {
        logged: false, // 현재 로그인중
        username: null, // 로그인중인 사용자명
    };

    constructor(props) {
        super(props);
        // 중요! 만약 로컬스토리지가 없는 환경 (예: 서버사이드 렌더링) 이라면 진행하지 않음.
        if(typeof localStorage === 'undefined') return;
        // user 를 로컬스토리지에서 읽어오고
        const user = localStorage.getItem('user');
        if(user) {
            // 존재하면
            try{
                // 파싱을 시도합니다. 근데 이게 실패 할 수도 있으므로 try 로 감쌌습니다.
                const parsed = JSON.parse(user);
                // 파싱 문제 없으면 state 에 반영.
                this.state = {
                    logged: true,
                    username: parsed.username,
                }
            } catch(e) {
                console.log(e);
            }
        }
    }

    // UserProvider 에서 다룰 액션 함수들입니다.
    actions = {
        // 로그인 함수
        login: form => {
            const { username, password } = form; // form 안엔 username 과 password 가 들어있습니다.
            const user = users.find(u => u.username === username); // username 으로 계정정보를 찾습니다.

            // 유저가 존재하지 않거나 비밀번호가 틀리면
            if (!user || user.password !== password) {
                return false; // 실패처리
            }

            // 성공시 state 를 업데이트 합니다.
            this.setState({
                logged: true,
                username,
            });

            // 유저 정보를 로컬스토리지에 기록합니다.
            localStorage.setItem('user', JSON.stringify(user));

            return true; // 성공을 알립니다.
        },
        logout: () => {
            // 로그아웃 시 상태를 초기상태로 돌립니다.
            this.setState({
                logged: false,
                username: null,
            });

            // 로컬스토리지에서 기존 값을 날립니다.
            localStorage.removeItem('user');
        },
    };

    render() {
        // 편의상 value 를 만들어서 JSX 를 작성하기 전에 우리가 Context 에서 사용 할 값들을 미리 넣어줍니다.
        const value = {
            state: this.state,
            actions: this.actions,
        }
        // Provider 에게 value 를 전달해줍니다.
        return <Provider value={value}>{ this.props.children }</Provider>;
    }
}

// 우리가 만든 UserConsumer 과 UserProvider 를 내보내줍니다.
export { UserConsumer, UserProvider };
