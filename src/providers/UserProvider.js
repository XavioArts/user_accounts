import React from "react";

export const UserContext = React.createContext();

class UserProvider extends React.Component {

    state = {
        firstName: "John",
        lastName: "Zoidberg",
        email: "ilikefood@aol.com",
        avatar: "utensils",
        color: "red",
        updateUser: (user) => this.updateUser(user)
    }

    // adding a list to change user later on
    userList = [
        {firstName: "John",
        lastName: "Zoidberg",
        email: "ilikefood@aol.com",
        avatar: "utensils",
        color: "red",},
        {firstName: "Phillip",
        lastName: "Fry",
        email: "fromthe90s@hotmail.com",
        avatar: "rocket",
        color: "orange",},
        {firstName: "Turunga",
        lastName: "Leela",
        email: "nafetyforsafety@gmail.com",
        avatar: "eye",
        color: "purple",},
    ]

    updateUser = (user) => {
        this.setState({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            avatar: user.avatar,
            color: user.color,});
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    };
};

export default UserProvider