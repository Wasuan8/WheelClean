import { View, Text,Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';


const OnboardingScreen = () => {
  const navigation = useNavigation();
  const DotComponent =({selected}) => {
    return(
      <View className={`w-4 h-4 flex items-center justify-center rounded-full 
       ${selected ? "border border-blue-400" : " "}  p-2`}>
        <View className={`w-2 h-2 ${selected ? "bg-blue-400" : "bg-blue-200" } rounded-full`}>

        </View>
      </View>
    )
  }
  return (
    <Onboarding
    onSkip={() => navigation.replace('Home')}
    onDone={() => navigation.replace('Home')}
    DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: '#fff',
          image: ( 
          <Image source={{
            uri:'https://img.freepik.com/premium-vector/car-wash-service-flat-design-illustration-workers-washing-automobile-using-sponges-soap-water-background-poster-banner_2175-1980.jpg?compress=1&resize=2000x1145&vertical=top'
          }
         } 
          className ="w-72 h-72 object-contain"
          />
          ),
          title: 'Happy Washing car',
          subtitle: 'Lorem ipsum dollor Lorem ipsum dollor  Lorem ipsum dollor  Lorem ipsum dollor ',
        },
        {
          backgroundColor: '#fff',
          image: (
          <Image
           source={{ uri: 'https://img.freepik.com/premium-vector/car-wash-service-illustration-concept_644411-98.jpg?compress=1&resize=626x418&vertical=top'
           }}
           className="w-72 h-72 object-contain"
           />
          ),
          title: 'All you need in One Place to Wash the Car',
          subtitle: 'Lorem ipsum dollor Lorem ipsum dollor  Lorem ipsum dollor  Lorem ipsum dollor ',

        },
        {
          backgroundColor: '#fff',
          image: (
          <Image source={{ uri: 'https://media.istockphoto.com/id/1145783151/vector/car-washing-in-foam.jpg?s=612x612&w=0&k=20&c=JKjgICLr3PnaxTjJgROINtHZFD7nvWg4kbwqBlk1Mwo=' 
        }} 
        className="w-72 h-72 object-contain"
          />
          ),
          title: 'Happy wash, Happy Customer',
          subtitle: 'Lorem ipsum dollor Lorem ipsum dollor  Lorem ipsum dollor  Lorem ipsum dollor ',
        }
      ]}
    />
  );
};

export default OnboardingScreen;