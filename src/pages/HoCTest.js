import React from 'react';
import queryString from 'query-string';
import withRequest from '../HOC/withRequest';


const HoCTest = (props) => {
    const { data } = props;
    
    if (!data) return null;

    return (
        <div>
            <div>
                { JSON.stringify(props.data) }    
            </div>
        </div>
    );
};

export default withRequest('https://jsonplaceholder.typicode.com/posts/1')(HoCTest);