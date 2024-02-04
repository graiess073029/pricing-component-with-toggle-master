
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';

import bgBottomD from "./Components/assets/images/bg-bottom.svg"
import bgTopM from "./Components/assets/images/bg-top.svg"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <div className="bg"></div>
        <img className="topImgD" src={bgTopM} alt="" />
        <App />
        <img className="bottomImgD" src={bgBottomD} alt="" />
    </>

);

