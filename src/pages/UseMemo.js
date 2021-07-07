import React, { useMemo, useState } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum / numbers.length;
}

const UseMemo = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    }

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo(()=>getAverage(list), [list]);
    
    return (
        <div>
            <h2>
                useMemo Test - 연산 최적화 
            </h2>
            <div>(데이터가 변경이 될 때만 바뀌지 않았다면 이전 연산으로 수행)</div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=>{
                    <li key={index}>{value}</li>
                })}
            </ul>
            <div>
                <b>평균값 : </b> {avg}
            </div>
        </div>
    );
};

export default UseMemo;