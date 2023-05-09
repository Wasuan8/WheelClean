import { StyleSheet, Text, View ,ScrollView,Pressable,Image} from 'react-native'
import React from 'react';


const Services = () => {

 const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/512/2052/2052358.png",
      name: "Hand Wash",
     
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/512/1743/1743609.png",
      name: "Automatic Wash"
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
  return (
    <View style={{padding:10}}>
        <Text style={{fontSize:16,fontWeight:"500",marginBottom:7}}>Services Available</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {services.map((service,index) => (
                <Pressable style={{margin:10,backgroundColor:"white",padding:20,borderRadius:7}} key={index}>
                    <Image source={{uri:service.image}} style={{width:70,height:70}}/>

                    <Text style={{textAlign:"center",marginTop:10}}>{service.name}</Text>
                </Pressable>
            ))}
        </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})