import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [{
        id: "u1",
        name: "Max",
        image: "https://ih1.redbubble.net/image.849913282.6860/flat,750x,075,f-pad,750x1000,f8f8f8.u5.jpg",
        places: 3
    }];

    return <UsersList items={USERS}/>
}

export default Users;