import React from 'react';
import { Image } from 'native-base';
const Boy = ({ size = "lg" }) => {

    return (
        <Image
            size={size}
            resizeMode="cover"
            source={{
                uri: "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
            }}
            alt={"Alternate Text "}
        />
    );
}
export default Boy;