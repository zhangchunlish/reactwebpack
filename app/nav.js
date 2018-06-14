import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
// exact精确匹配使用，
// 一般而言React会匹配所有能匹配的路由组阶，
// exact可以使我们的匹配更精确。
// exact的值为bool型，
// 为true是表示严格匹配，
// 为false时为正常匹配。
const NavBar = () =>(
    <div>
        <div>
            <NavLink exact to='/' className="blue">Jspanga</NavLink> |&nbsp;
            <NavLink to='/Jspangb' activeClassName="active">Jspangb</NavLink> |&nbsp;
            <NavLink to='/Jspangc' activeClassName="active">Jspangc</NavLink> |&nbsp;
            <NavLink to='/redirect' activeClassName="active">Redirect</NavLink> |&nbsp;
            <NavLink to='/react' activeClassName="active">404</NavLink>
        </div>
    </div>
)
    
export default NavBar;