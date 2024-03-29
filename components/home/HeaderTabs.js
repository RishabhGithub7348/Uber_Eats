import React, { useState }  from 'react'
import { Text, View, TouchableOpacity } from 'react-native'


export default function HeaderTabs (props) {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
      <View style={{flexDirection:"row", alignSelf: "center" }} >
      
       <HeaderButton 
       text="Delivery" 
       btnColor="black" 
       textColor="white" 
       activeTab={props.activeTab} 
       setActiveTab={props.setActiveTab} 
       />
       <HeaderButton 
       text="Pickup"
       btnColor="white" 
       textColor="black"
       activeTab={props.activeTab} 
       setActiveTab={props.setActiveTab}  
       />
       
       
      </View>
    )
  
}
const HeaderButton = (props) =>( 
    
        <TouchableOpacity
        style={{
          backgroundColor: props.activeTab === props.text ? "black" : "white" ,
          paddingHorizontal: 16,
          paddingVertical: 6,
          borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)}
        >
        <Text style={{color: props.activeTab === props.text ? "white" : "black" ,fontSize: 15, fontWeight: "900"}} >{props.text}</Text>
         </TouchableOpacity>
  
   )
