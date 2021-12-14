import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const NavBar = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <Menu>
                <NavLink to="/" >
                    <Menu.Item>Home</Menu.Item>
                </NavLink>
                <NavLink to="/user/profile" >
                    <Menu.Item>{user.firstName}</Menu.Item>
                </NavLink>
            </Menu>
        </div>
    );
};

export default NavBar;