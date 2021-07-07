import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

const withRequest = (url) => (WrappedComponent) => {
    return function Enhanced(props){
        const [data, setData] = useState(null);  

        useEffect(()=>{
            initialize();
        },[]);
        
        async function initialize(){
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (e) {
                console.log(e);
            }
        }    

        return (
            <WrappedComponent {...props} data={data}/>
        )
    }
  
}

export default withRequest;