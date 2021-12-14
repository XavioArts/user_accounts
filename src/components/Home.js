import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const Home = () => {

    const user = useContext(UserContext);

    return (
        <div>
            <h1>Home Page</h1>
            <p>Current user: {user.firstName} {user.lastName}</p>
        </div>
    );
};

export default Home;