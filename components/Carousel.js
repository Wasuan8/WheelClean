import { View, Text } from 'react-native';
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";


const Carousel = () => {
    const images = [
        "https://www.carcility.com/images/quick-booking/quick-booking-car-wash.png",
        "https://media.istockphoto.com/id/1401355417/vector/dry-cleaning-of-car-salon-auto-wash-service.jpg?s=612x612&w=0&k=20&c=rw3gxlP7hYwh03vmNwRGaqLFzXMjf5LFzKfzHju582k=",
        "https://ik.imagekit.io/driveu/Web/Car_Wash_illustration_oPHa7gRLc.png?w=800",
    ];
    return (
        <View>
            <SliderBox
                images={images}
                autoPlay
                circleLoop
                dotColor={"#13274F"}
                inactiveDotColor="#90A4AE"
                ImageComponentStyle={{
                    borderRadius: 6,
                    width: "94%",
                }}
            />
        </View>
    )
}

export default Carousel;