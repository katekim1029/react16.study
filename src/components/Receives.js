import React from 'react';
import { useSample } from '../contexts/sample';

const Receives = ({ value }) => {
    return <div>현재 설정된 값: { value }</div>;
};

export default useSample(Receives);


// import { SampleConsumer } from '../contexts/sample';

// const Receives = () => {
//     return (
//         <SampleConsumer>
//             { sample => <div>현재 설정된 값: { sample.state.value }</div> }
//             { ({ state }) => <div>현재 설정된 값: { state.value }</div> }
//         </SampleConsumer>
//     );
// };

// export default Receives;
