import React from 'react';
import { withStateHandlers } from 'recompose';

const Form = ({ name, description, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input 
                name="description" 
                placehoder="설명" 
                onChange={onChange}
                value={description}
            />
            <button type="submit">추가</button>
        </form>
    );
};
const enhance = withStateHandlers(
    { 
        name: '',
        description: ''
    },
    {
        onChange: state => e => ({
            [e.target.name]: e.target.value
        }),
        onSubmit: (state, props) => e => {
            e.preventDefault();
            props.onAdd({
                name: state.name,
                description: state.description
            });
            return {
                name: '',
                description: ''
            }
        }
        // props 로 받아온 onAdd 함수를 호출하기 위해선
        // onSubmit 쪽에 두번째 파라미터로 props 를 받아와서 사용하셔야 합니다.
    }
);

export default enhance(Form);
