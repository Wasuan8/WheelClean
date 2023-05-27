import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, ScrollView, Alert, Image, } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import { useNavigation } from '@react-navigation/native';

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/512/2052/2052358.png",
      name: "Hand Wash",

    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/512/1743/1743609.png",
      name: "Automatic Wash",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/512/5385/5385585.png",
      name: "Touchless Wash",

    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/512/4524/4524000.png",
      name: "Waterless Wash",
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/512/3626/3626863.png",
      name: "Mobile Wash",
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/512/7481/7481872.png",
      name: "Detailing",
    },

  ];
  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },
    {
      id: "2",
      name: "4-5 Days",
    },
    {
      id: "3",
      name: "5-6 Days",
    },
    {
      id: "4",
      name: "Tommorrow",
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 AM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "3",
      time: "2:30 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:30 PM",
    },
  ];
  const naviagtion = useNavigation();
  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !delivery || !address || !service) {
      Alert.alert(
        "Empty or invalid",
        "Please select all the fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );

    }
    if (selectedDate && selectedTime && delivery && address && service) {
      naviagtion.replace("CartScreen", {
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        no_Of_days: delivery,
        Address: address,
        Service: service,
        

      })

    }
  }
  return (
    <>
      <SafeAreaView style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>Enter Address</Text>
        <TextInput
        onChangeText={(text)=> setAddress(text)}
          style={{
            padding: 10,
            fontSize: 18,
            borderColor: 'gray',
            borderWidth: 0.7,
            paddingVertical: 20,
            borderRadius: 9,
            margin: 10,
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>Enter Services Name:</Text>
          <TextInput
          onChangeText={(text) => setService(text)}
            style={{
              padding: 10,
              fontSize: 18,
              borderColor: 'gray',
              borderWidth: 0.7,
              paddingVertical: 10,
              borderRadius: 9,
              margin: 10,
            }}
          />

        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>
          Pick Up Date
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date('2023-04-20')}
          endDate={new Date('2023-05-31')}
          initialSelectedDate={new Date('2020-08-22')}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />


        {/* Time selected */}
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>
          Select Time
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {times.map((item, index) => (
            <Pressable
              style={
                selectedTime.includes(item.time) ?
                  {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    backgroundColor: "gray",
                    borderWidth: 0.7,
                  } :

                  {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "red",
                    borderWidth: 0.7,
                  }
              }

              onPress={() => setSelectedTime(item.time)}
              key={index} >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        {/* Delivery date  */}
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>
          Delivery Date
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, i) => (
            <Pressable
              style={
                delivery.includes(item.name)
                  ? {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    backgroundColor: "gray",
                    borderWidth: 0.7,
                  }
                  : {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "red",
                    borderWidth: 0.7,
                  }
              }
              onPress={() => setDelivery(item.name)}
              key={i}
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <ScrollView style={{ backgroundColor: "#F0F0F0", }}>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Services Available</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>{services.map((service, index) => (
              <Pressable style={{ margin: 10, backgroundColor: "white", padding: 20, borderRadius: 7 }} key={index}>
                <Image source={{ uri: service.image }} style={{ width: 70, height: 70 }} />

                <Text style={{ textAlign: "center", marginTop: 10 }}>{service.name}</Text>

              </Pressable>
            ))}
            </ScrollView>

          </View>
          
        </ScrollView>
      </SafeAreaView>
      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            marginTop: "auto",
            padding: 10,
            marginBottom: 40,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | $ {total}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "white",
                marginVertical: 6,
              }}
            >
              extra charges might apply
            </Text>
          </View>

          <Pressable onPress={proceedToCart}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Proceed to Cart
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  )
};

export default PickUpScreen;

const styles = StyleSheet.create({})