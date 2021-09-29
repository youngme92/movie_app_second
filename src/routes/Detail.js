import React from "react";

function Detail({ location, history }) {
    if (location.state === undefined) {
        history.push('/');
        return null;
    } else {
        return (
            <div>
                <h2>{location.state.title}</h2>
            </div>
        )
    }
}

export default Detail;