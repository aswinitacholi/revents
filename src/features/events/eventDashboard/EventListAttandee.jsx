import React from "react";
import { List, Image } from "semantic-ui-react";

export default function EventListAttandee({attendee}) {
    return(
        <List.Item>
            <Image size='mini' circular src={attendee.photoURL}/>
        </List.Item>
    )
}