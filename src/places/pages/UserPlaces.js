import React from "react";
import {useParams} from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "empire state building",
        description: "famous skyscraper in NY",
        imageUrl: "https://i.pinimg.com/280x280_RS/dc/f5/33/dcf533f965c3ad3315ba7f2a1c8542c4.jpg",
        address: "20 W 34th St, New York, NY 10001, Unites States",
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: "u1"
    },
    {
        id: "p2",
        title: "empire state building",
        description: "famous skyscraper in NY",
        imageUrl: "https://i.pinimg.com/280x280_RS/dc/f5/33/dcf533f965c3ad3315ba7f2a1c8542c4.jpg",
        address: "20 W 34th St, New York, NY 10001, Unites States",
        location: {
            lat: 40.7484405,
            lng: -73.9878531
        },
        creator: "u2"
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;