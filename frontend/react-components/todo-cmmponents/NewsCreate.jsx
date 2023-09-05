import ReactModal from 'react-modal';
import React, {useState} from 'react';
import {saveData} from "../../service";

function Create(props) {

    const [cred, setCred] = useState({
        title: "",
        description: "",
        text: ""
    });

    const save = () => {
        saveData(cred).then(() => {

        })
    };

    return (
        <div>
            <ReactModal
                isOpen={props.isOpen}
                contentLabel="Example Modal"
            >
                <input onChange={(e) => setCred({...cred, title: e.target.value})} value={cred.title} className="form-control" type="text" placeholder="title"/>
                <input onChange={(e) => setCred({...cred, description: e.target.value})} value={cred.description} className="form-control" type="text" placeholder="description"/>
                <input onChange={(e) => setCred({...cred, text: e.target.value})} value={cred.text} className="form-control" type="text" placeholder="text"/>
                <button className="btn btn-primary" onClick={() => {
                    save();
                }}>Save</button>
                <button onClick={props.closePopup}>close Modal</button>
            </ReactModal>
        </div>
    );
}

export default Create;