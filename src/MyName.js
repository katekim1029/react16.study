import React from 'react';

const MyName = ({name}) => {
    return(
        <div>
            {console.log('child-child')}
            안녕하세요! 제 이름은 <strong>{name}</strong> 입니다.
        </div>
    )
}

export default MyName;
