import React  from 'react'
import { Text, View ,StyleSheet, Image} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements/dist/divider/Divider'


const foods = [
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
      title: "Tandoori Chicken",
      description:
        "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
      price: "$19.20",
      image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
      title: "Chilaquiles",
      description:
        "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
      price: "$14.50",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
      title: "Chicken Caesar Salad",
      description:
        "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
      price: "$21.50",
      image:
        "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
    },
  ];

const styles = StyleSheet.create({
    menuItemStyle : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    }
})

export default function  MenuItems () {
  
    return (
        <>
        {foods.map((food, index) => (
        <View key= {index}>
      <View style= {styles.menuItemStyle}>
        <BouncyCheckbox
         iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
         fillColor="green"
        />
      <FoodInfo food = {food} />
      <FoodImage food = {food}/>
      </View>
    <Divider width={0.5} orientation='vertical' style={{marginHorizontal: 20}} />
      </View>
       ))}
    </>
    )
 
  
}

const FoodInfo = (props) => (
    <View style= {{
        width: 240,
        justifyContent: 'space-evenly',

    }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
) 
const FoodImage = (props)=> (
    <View>
        <Image source={{uri: props.food.image}} style={{
            width: 100,
            height:100,
            borderRadius:8,
          

        }} /> 
    </View>
)
