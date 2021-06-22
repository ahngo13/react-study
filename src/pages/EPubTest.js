import React, { useState } from 'react';
import { useRef } from 'react'
// import test from '../epub/test.epub';
// import test2 from '../epub/test2.epub';
import {
  EpubViewer,
  ReactEpubViewer
} from 'react-epub-viewer'

//epub 폴더 생성 후 epub 샘플 파일 넣은 후 테스트 완료
const EPubTest = () => {
    const viewerRef = useRef(null);
    const prevPage = () => {
        viewerRef.current.prevPage();
    }
    
    const nextPage = () => {
        viewerRef.current.nextPage();
    }

     return (
         <>
            <div style={{ position: "relative", height: "80%" }}>
                <ReactEpubViewer 
                    /* url={test2} */
                    ref={viewerRef}
                />
            </div>
            <button onClick={prevPage}>이전</button>
            <button onClick={nextPage}>다음</button>
        </>
    );
};

export default EPubTest;