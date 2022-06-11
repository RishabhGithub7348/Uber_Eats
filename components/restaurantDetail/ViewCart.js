import React from 'react'
import { Text, View} from 'react-native'
import {TouchableOpacity   } from 'react-native-gesture-handler'
export default function ViewCart () {
  
    return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 130,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}>
        <Text style={{color: 'white', fontSize: 20}}>VIEWCART</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
 
}
