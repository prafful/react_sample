import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Alphabet from "./components/Alphabet";
import BehindTheScene from './components/behindthescene';
import ComponentLifeCycle from './components/ComponentLifeCycle';
import LocalJson from './components/LocalJson';
import RemoteData from './components/RemoteData';
import Website from './components/spa-website/Website';

const position = document.getElementById("myapp");
const ls = document.getElementById("lifecycle")
const spa = document.getElementById("spa")

ReactDOM.render(
                    <div>
                        <Website />
                    <hr></hr>
                    </div>, 
                    spa)

ReactDOM.render(<ComponentLifeCycle />, ls);

ReactDOM.render(
                <div>
                    <LocalJson /> 
                    <RemoteData />
                    <BehindTheScene />
                    <Alphabet fcolor="red" bcolor="green">H</Alphabet>
                    <Alphabet fcolor="green" bcolor="purple">O</Alphabet>
                    <Alphabet fcolor="blue" bcolor="skyblue">M</Alphabet>
                    <Alphabet fcolor="purple" bcolor="yellow">E</Alphabet>
                    <Header name="prafful">Programmer</Header>
                    <Header name="manoj">Architect</Header>
                </div>    , 
    
    position);
