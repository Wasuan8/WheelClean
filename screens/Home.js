import { StyleSheet, Text, View, SafeAreaView, ScrollView, Pressable, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react';
import * as Location from "expo-location";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import DressItem from '../components/DressItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../ProductReducer';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs} from "firebase/firestore";
import { db } from '../firebase';


const Home = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [items, setItems] = useState([]);
  const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation(); //use navigation method
  console.log(cart);
  const [displayCurrentAddres, setDisplayCurrentAddres] = useState("we are loading your location");
  const [locationeserviceEnabled, setLoactionserviceEnabled] = useState(false);
  useEffect(() => {
    chechIfLocationEnabled();
    getCurrentLocation();

  }, [])
  const chechIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Loaction services not enabled",
        "please enable the location services",
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

    } else {
      setLoactionserviceEnabled(enabled);
    }
  }
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "permission denied",
        "allow the app to use the location services",
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
    };
    const { coords } = await Location.getCurrentPositionAsync();
    //  console.log(coords);
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
      // console.log(response);
      for (let item of response) {
        let addres = `${item.street} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddres(addres);
      }
    }
  };
  const product = useSelector((state) => state.product.product);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product.length > 0) return;
    const fetchProducts = async () => {
      const colRef = collection(db,"types");
      const docSnap = await getDocs(colRef);
      docSnap.forEach((doc) => {
        items.push(doc.data());
      });
      items?.map((services) => dispatch(getProducts(services)));

    };
    fetchProducts();
  }, []);
  console.log(product);

  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/512/9622/9622431.png",
      name: "Sedan",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/512/4754/4754559.png",
      name: "SUV",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/512/3295/3295377.png",
      name: "SportsCar",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/512/3098/3098397.png",
      name: "Electric",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/512/3089/3089627.png",
      name: "Coupe",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/512/5952/5952126.png",
      name: "Hatchbank",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/512/5594/5594087.png",
      name: "Mini_Van",
      quantity: 0,
      price: 10,
    },
  ];


  return (
    <>
      <ScrollView style={{ backgroundColor: "#F0F0F0", flex: 1, marginTop: 25 }}>
        {/* Location Bar */}
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <MaterialIcons name="location-on" size={30} color="blue" />
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>Home</Text>
            <Text>{displayCurrentAddres} </Text>

          </View>
          <Pressable onPress={() => navigation.navigate("ProfileScreen")}  style={{ marginLeft: "auto", marginRight: 7 }}>
            <Image style={{ width: 40, height: 40, borderRadius: 20 }}
              source={{
                uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
              }}
            />

          </Pressable>

        </View>
        {/* Search bar */}
        <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 0.8,
            borderColor: "#C0C0C0",
            borderRadius: 7,
          }}>
          <TextInput placeholder='Search for item or More' />
          <Ionicons name="search" size={24} color="black" />

        </View>
        {/* Images Carousal */}
        <Carousel />
        {/* Services component */}
        <Services />
        {/* Render all the Products */}
        {product.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}

      </ScrollView>
      {total === 0 ? (
        null
      ) : (
        <Pressable style={{
          backgroundColor: "#088F8F",
          padding: 10,
          marginBottom: 40,
          margin: 15,
          borderRadius: 7,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'space-between'
        }}>
          <View>
            <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>{cart.length}item | ${total}</Text>
            <Text style={{ fontSize: 15, fontWeight: '400', color: 'white', marginVertical: 6 }}>
              extra charges might apply</Text>

          </View>
          <Pressable onPress={() => navigation.navigate("PickUpScreen")}>
            <Text style={{fontSize:15,
            fontWeight:'400',color:'white'}}>Proceed to picpkup</Text>
          </Pressable>

        </Pressable>
      )}

    </>
  )
};

export default Home;

const styles = StyleSheet.create({})