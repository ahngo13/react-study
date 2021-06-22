import React, { useState } from 'react';

function PopUpDialog({open, setDialog, onAccept, onDecline}){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleClose = () => {
        setName('');
        setDescription('');
        setDialog(!open);
    }

    const handleDecline = () => {
        onDecline();
        setName('');
        setDescription('');
        setDialog(!open);
    }

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleAccept = () => {


        alert("alertString");

        onAccept({
            name: name,
            description: description
        })
        setName('');
        setDescription('');
        setDialog(!open);
    }

    return(
        
        <div>
            {open ? (
            <>
            프로젝트명 : <input id="name" type="text" /><br/>
            프로젝트내용 : <input id="description" type="text" /><br/>
            <button onClick={handleAccept}>생성</button>
            <button onClick={handleDecline}>취소</button>
            </>):
            <div></div>
            }
        </div>
    )
}

const PopUpTest = () => {
    const [popUpDialog, setPopUpDialog] = useState(false);

    const createRequest = () => {
        alert('생성');
    }

    return (
        <div>
            <h2>
                PopUp 예제
            </h2>
            <button onClick={()=>{setPopUpDialog(!popUpDialog)}}>팝업 열기</button>
            <PopUpDialog 
                open={popUpDialog}
                onAccept={createRequest}
                onDecline={()=>{ }}
                setDialog={setPopUpDialog}/>
        </div>
    );
};

export default PopUpTest;