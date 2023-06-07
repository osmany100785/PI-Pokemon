//import Card from './Card/Card';
//import CardsContainer from './CardsContainer/CardsContainer';
//import Footer from './Footer/Footer';
//import NabBar from './NavBar/NavBar';
import Paginado from './Paginator/Paginator';
import Searchbar from '../Searchbar/Searchbar';

//export {Card,CardsContainer,Footer,NabBar,Paginado, Searchbar};
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import {Provitor} from "react-redux";
import { store } from "./redux/store";

ReactDom.render(
    <React.StrictMode>
        <Provitor store ={store}>
        <App/>
        </Provitor>
    </React.StrictMode>
    document.getElementById('root')

);  
