import React, { useMemo, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';


const HlsPlayer = () => {
    //ts파일이 타입스크립트로 인식되지 않도록 public으로 올려줌.
    //m3u8파일은 영상을 분류해주는 역할을 하는 듯.
    return (
        <>
        {/* <ReactHlsPlayer
            src={window.location.origin + '/movie/playlist.m3u8'}
            autoPlay={false}
            controls={true}
            width="100%"
            height="auto"
        /> */}
        </>
    );
};

export default HlsPlayer;