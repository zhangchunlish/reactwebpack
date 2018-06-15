import React from 'react';
import ReactDOM from 'react-dom';
import Jspang  from './jspang';
import Jspangb  from './jspangb';
import Jspangc  from './jspangc';
import Error  from './error';

import {BrowserRouter as Router ,HashRouter,MemoryRouter, Route ,Switch,Redirect } from "react-router-dom";
import Nav from "./nav";
// BrowserRouter：浏览器的路由方式，也是我们一直在学习的路由方式，在开发中最常使用。
// HashRouter：在路径前加入#号成为一个哈希值。Hash模式的好处是，再也不会因为我们刷新而找不到我们的对应路径了。
// MemoryRouter：不存储history，所有路由过程保存在内存里，不能进行前进后退，因为地址栏没有发生任何变化。
// NativeRouter：经常配合ReactNative使用，多用于移动端，以后ReactNative课程中会详细讲解。
// StaticRouter：设置静态路由，需要和后台服务器配合设置，比如设置服务端渲染时使用。
ReactDOM.render(
    //<Jspang/>,
    <Router basename="demo">
        <div>
            <Nav/>
            <Route exact path="/" component={Jspang} />
            <Route  path="/Jspangb"  component={Jspangb} />
            <Route  path="/Jspangc/:param/:params"  component={Jspangc} />
            <Redirect from="/redirect" to="/Jspangb" />
            <Route  component={Error} />

        </div>
    </Router>,
    // <HashRouter basename="demo" >
    //     <div>
    //         <Nav/>
    //         <Switch>
    //             <Route  exact  path="/"  component={Jspang} />
    //             <Route  path="/Jspangb" component={Jspangb} />
    //             <Route  path="/Jspangc/:param" component={Jspangc} />
    //             <Redirect from="/redirect" to="/Jspangb" />
    //             <Route  component={Error} />
    //         </Switch>
            
    //     </div>
    // </HashRouter>,
    // <MemoryRouter basename="demo" >
    //     <div>
    //         <Nav/>
    //         <Switch>
    //             <Route  exact  path="/"  component={Jspang} />
    //             <Route  path="/Jspangb" component={Jspangb} />
    //             <Route  path="/Jspangc/:param" component={Jspangc} />
    //             <Redirect from="/redirect" to="/Jspangb" />
    //             <Route  component={Error} />
    //         </Switch>
            
    //     </div>
    // </MemoryRouter>,
    document.getElementById("app")
);