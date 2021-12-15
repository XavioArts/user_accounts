import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const UserForm = () => {
    const user = useContext(UserContext);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [avatar, setAvatar] = useState(user.avatar);
    const [color, setColor] = useState(user.color);

    const handleSubmit = (e) => {
        e.preventDefault();
        let updatedUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            avatar: avatar,
            color: color,
        };
        console.log(avatar);
        console.log(color);
        console.log(updatedUser);
        user.updateUser(updatedUser);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input 
            label="Edit first name" 
            name="firstName" 
            value={firstName} 
            onChange={(e)=>setFirstName(e.target.value)} />
            <Form.Input 
            label="Edit last name" 
            name="lastName" 
            value={lastName} 
            onChange={(e)=>setLastName(e.target.value)} />
            <Form.Input 
            label="Edit email" 
            name="email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} />
            <Form.Select
            label="Choose avatar"
            name="avatar"
            value={avatar}
            onChange={(e)=>setAvatar(e.target.value)}
            options={avatarOptions} />
            <Form.Select
            label="Choose color"
            name="color"
            value={color}
            onChange={(e)=>setColor(e.target.value)}
            options={colorOptions} />
            <Button type="submit" >Submit</Button>
        </Form>
    );
};

const colorOptions = [
    {key: "r",text: "red",value: "red"},
    {key: "o",text: "orange",value: "orange"},
    {key: "y",text: "yellow",value: "yellow"},
    {key: "ol",text: "olive",value: "olive"},
    {key: "g",text: "green",value: "green"},
    {key: "t",text: "teal",value: "teal"},
    {key: "b",text: "blue",value: "blue"},
    {key: "v",text: "violet",value: "violet"},
    {key: "p",text: "purple",value: "purple"},
    {key: "pi",text: "pink",value: "pink"},
    {key: "br",text: "brown",value: "brown"},
    {key: "gry",text: "grey",value: "grey"},
    {key: "bl",text: "black",value: "black"},
]
const avatarOptions = [
    {key: "r",text: "rocket",value: "rocket"},
    {key: "u",text: "utensils",value: "utensils"},
    {key: "h",text: "headphones",value: "headphones"},
    {key: "c",text: "coffee",value: "coffee"},
    {key: "ck",text: "chess king",value: "chess king"},
    {key: "cq",text: "chess queen",value: "chess queen"},
    {key: "us",text: "user secret",value: "user secret"},
    {key: "cr",text: "crosshairs",value: "crosshairs"},
    {key: "b",text: "bug",value: "bug"},
]

export default UserForm;