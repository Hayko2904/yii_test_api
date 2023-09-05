import React, {useState, useEffect, useRef} from 'react';
import News from "./todo-cmmponents/News";
import {useSelector} from "react-redux";


function App() {
    const state = useSelector(state => state);

    return (
        <div className="App">
            <News />
        </div>
    );
}

export default App;