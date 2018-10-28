import React from 'react';

const List = ({ list }) => {
    return (
        <ul>
            {list.map((item, index) => (
                <li>
                    {item.name}({item.description})
                </li>
            ))}
            {/* 
                현재 고유 id 로 사용 할 key 가 없기 때문에 그냥 index 를 key 로 사용
                프로덕션에선 이렇게 index 를 key 로 사용하는것은 성능이 안 좋기 때문에 권장되지 않음
            */}
        </ul>
    );
  };

export default List;
