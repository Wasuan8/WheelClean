import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react';


const Services = () => {

  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/512/2052/2052358.png",
      name: "HAND WASH",
      detail: "MANUAL CLEANING USING WATER, CAR SHAMPOO, AND A SPONGE OR CLOTH.",

    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/512/1743/1743609.png",
      name: "AUTOMATIC WASH",
      detail: "MECHANIZED SYSTEM WITH AUTOMATED PROCESSES FOR WASHING, RINSING, AND DRYING.",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/512/5385/5385585.png",
      name: "TOUCHLESS WASH",
      detail: "HIGH-PRESSURE WATER JETS AND DETERGENTS CLEAN THE CAR WITHOUT PHYSICAL CONTACT.",

    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/512/4524/4524000.png",
      name: "WATERLESS WASH",
      detail: "SPECIAL CLEANING AGENTS SPRAYED ON AND WIPED OFF WITHOUT USING WATER.",
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/512/3626/3626863.png",
      name: "MOBILE WASH",
      detail: "BRINGS THE CAR WASH SERVICE DIRECTLY TO YOUR LOCATION, SAVING YOU TIME AND EFFORT."
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/512/7481/7481872.png",
      name: "DETAILING",
      detail: "THOROUGH CLEANING AND RESTORATION PROCESS FOR BOTH INTERIOR AND EXTERIOR SURFACES.",
    },

  ];
  const MAX_CHUNK_LENGTH = 20;
  const getServiceTextChunks = (service) => {
    const { detail } = service;
    const textChunks = [];
    let currentChunk = '';
    detail.split(' ').forEach((word) => {
      if((currentChunk + word).length <= MAX_CHUNK_LENGTH){
        currentChunk += word + ' ';
      } else {
        textChunks.push(currentChunk);
        currentChunk = word + ' ';
      }
    });

    if( currentChunk != ''){
      textChunks.push(currentChunk);
    }
    return textChunks;
    // for (let i = 0; i < detail.length; i += MAX_CHUNK_LENGTH) {
    //   textChunks.push(detail.slice(i, i + MAX_CHUNK_LENGTH));
    // }
    // return textChunks;
  };
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 7 }}>Services Available</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <Pressable style={{ flexDirection:'row', margin: 8, backgroundColor: "white", padding: 15, borderRadius: 7 }} key={index}>
            <Image source={{ uri: service.image }} style={{ width: 70, height: 70 }} />
            <View style={{ flex: 1 ,margin: 5, padding: 5,alignItems:'center',justifyContent:'center', borderWidth:2, borderRadius: 7, borderColor:'#088F8F' }}>
              {/* <Text style={{textAlign:'center', flexShrink: 1 }}  >{service.detail}</Text> */}
              {getServiceTextChunks(service).map((chunk, index) => (
                <Text key={index} style={{fontSize: 10,color:'black', textAlign:'justify'}}>{chunk}</Text>
              ))}
             <Text style={{ fontSize: 14, textAlign: 'center', color:'blue', padding: 5, }}>{service.name}</Text>

            </View>
           
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})