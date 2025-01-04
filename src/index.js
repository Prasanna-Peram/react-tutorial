import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import   '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Toaster } from "react-hot-toast";
//import $ from "jquery";
import  bootstrap  from 'bootstrap';
import { CookiesProvider } from 'react-cookie';
//import { DataBindingFetch } from './components/data-binding/data-binding-fetch';
//import { DataBindingJqueryAjax } from './components/data-binding/data-binding-jqueryAjax';
//import { DataBindingAxios } from './components/data-binding/data-binding-axios';
//import { OneWay } from './components/data-binding/one-way';
//import { EventDemo } from './components/data-binding/event-demo';
//import { MouseDemo } from './components/data-binding/mouse-demo';
//import { StyleBinding } from './components/data-binding/style-binding';
//import { StyleBinding1 } from './components/data-binding/style-binding1';
//import { ClassBinding } from './components/data-binding/class-binding';
//import { AnimationDemo } from './components/data-binding/animation-demo';
//import { KeyDemo } from './components/data-binding/key-demo';
//import { StateEventDemo } from './components/data-binding/state-event-demo';
//import { StateEventDemo1 } from './components/data-binding/state-event-demo1';
//import { StateEventUseRef } from './components/data-binding/state-event-useRef';
//import { IntervalDemo } from './components/data-binding/interval-demo';
//import { TouchEventDemo } from './components/data-binding/TouchEvent-demo';
//import { NasaAPI } from './components/data-binding/nasa-api';
//import { Fakestore } from './components/data-binding/fakestore';
//import { FormDemo } from './components/data-binding/form-demo';
//import { FormikDemo } from './components/data-binding/formik-demo';
//import { ValidationDemo } from './components/data-binding/validation-demo';
//import { ValidationDemo1 } from './components/data-binding/validation-demo1';
//import { FirstExample } from './components/data-binding/FirstExample'; //Registration Page with formik schema validations and css design
//import { FormikComponentDemo } from './components/data-binding/formik-component-demo';
//import { FormikComponentDemo1 } from './components/data-binding/formik-component-demo1';
//import { HookFormDemo } from './components/data-binding/hook-form-demo';
//import { Home } from './components/Custom-Components/Data-Grid/home';
//import { Home1 } from './components/Custom-Components/Data-Grid/home1';
//import { Home } from './components/hooks/home';
//import { Login } from './components/hooks/login';
//import { ContextDemo } from './components/hooks/Context-Demo';
//import { ReducerDemo } from './components/hooks/reducer-demo';
//import { LoginCookieDemo } from './components/hooks/Login-CookieDemo';
//import { EffectDemo } from './components/hooks/useEffectDemo';
//import { Product } from './components/JSClass/product';
//import { MountClassDemo } from './components/JSClass/mountClassDemo';
//import { EventClassDemo } from './components/JSClass/eventClassDemo';
//import { TwoWayDataBidningClassDemo } from './components/JSClass/twoWayDataBindingClassDemo';
//import { FormikClassDemo } from './components/JSClass/formikClassDemo';
//import { ApiRequestClassDemo } from './components/JSClass/apiRequestClassDemo';
//import { Product1 } from './components/JSClass/product1';
import { Portfolio } from './components/routes/portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //<CookiesProvider>
     
     <Portfolio/>
   // </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
