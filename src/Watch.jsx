import React from "react";
const Watch = ({watch}) => {
    const{brand,price}= watch;
    return (
        <div>
            <h2>Watch:{brand}</h2>
            <p>Price:{price}</p>
        </div>
    );
};

export default Watch;