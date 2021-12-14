import React, { useContext } from "react";
import { Card, Icon } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const UserShow = () => {

    const user = useContext(UserContext);

    return (
        <Card color={user.color} >
            <Card.Content>
                <Card.Header>{user.firstName} {user.lastName}</Card.Header>
                <Card.Meta>
            <Icon name={user.avatar} color={user.color} size="big" />
                    {user.avatar} user
                </Card.Meta>
            </Card.Content>
            <Card.Content>
                <Card.Description>
                    {user.email}
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default UserShow;