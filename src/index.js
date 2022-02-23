import React from "react";
import { render } from "react-dom";
import FirstImg from "../img1.jpg";
import SecondImg from "../img2.png";
import ThirdImg from "../img3.gif";

const App = () => {
    return (
        <div>
            <img src={FirstImg} alt='image 1' style={{objectFit: 'contain', height: 400, width: 400}}></img>
            <img src={SecondImg} alt='image 2' style={{objectFit: 'contain', height: 400, width: 400}}></img>
            <img src={ThirdImg} alt='image 3' style={{objectFit: 'contain', height: 400, width: 400}}></img>
        </div>
    )
}

render(<App />, document.getElementById('root'));