import React, { useContext } from "react";
import { Segment } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";
import UserShow from "./UserShow";

const User = () => {

    const user = useContext(UserContext);

    return (
        <div style={{textAlign: "center", margin: "10px", padding: "10px"}}>
            <h1>User Profile</h1>
            <Segment style={{display: "flex", justifyContent: "center"}}>
                <UserShow/>
            </Segment>
        </div>
    );
};

export default User;