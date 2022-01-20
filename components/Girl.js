import React from 'react';
import { Image } from 'native-base';
const Girl = ({ size = "lg" }) => {
    return (
        <Image
            size={size}
            resizeMode="cover"
            source={{
                uri: "https://i.dlpng.com/static/png/7314511_preview.png",
            }}
            alt={"Alternate Text "}
        />
    );
}
export default Girl;
