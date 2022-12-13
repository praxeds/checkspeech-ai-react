import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery'
import reportWebVitals from './reportWebVitals';


import LocomotiveScroll from 'locomotive-scroll';

import NavbarSection from './components/Navbar';


import '../node_modules/normalize.css/normalize.css';
import './stylesheet/css/fonts.css';
import './stylesheet/css/app.css';

const scroll = new LocomotiveScroll();
var imagesLoaded = require('imagesloaded');
var $$ = require('jquery');
imagesLoaded.makeJQueryPlugin( $$ );



const root = ReactDOM.createRoot($('#root')[0]);
root.render(
  <React.StrictMode>
    <NavbarSection />
  </React.StrictMode>
);

reportWebVitals();
