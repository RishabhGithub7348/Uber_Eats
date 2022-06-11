import React  from 'react'
import { Text, View,Divider ,Image} from 'react-native'


const yelpRestaurantInfo = {
    name: "FarmHouse Kitchen Thai Cuisine",
    image: "https://th.bing.com/th/id/R.eb177b3162036a61ec747071d0d4e0b6?rik=B4ju8Eqwr%2fKQCA&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f09%2fJunk-Food-High-Definition.jpg&ehk=fAtDOSO9vEG5T03j0QmvwG6CQJVC3tkqsbc5HzRtm%2bo%3d&risl=&pid=ImgRaw&r=0",
    price: "$$",
    reviews: "1500",
    rating: 4.5,
    categories : [{ title: "Thai"}, {title: "Comfort Food"}],
};

// const image =
// "https://th.bing.com/th/id/R.eb177b3162036a61ec747071d0d4e0b6?rik=B4ju8Eqwr%2fKQCA&riu=http%3a%2f%2fwallpapersdsc.net%2fwp-content%2fuploads%2f2016%2f09%2fJunk-Food-High-Definition.jpg&ehk=fAtDOSO9vEG5T03j0QmvwG6CQJVC3tkqsbc5HzRtm%2bo%3d&risl=&pid=ImgRaw&r=0"
 
// const title = 'FarmHouse Kitchen Thai Cuisine'
// const description = 'Thai  • Comfort Food  • $$  • 🎫 • 4 ⭐ (2913+) ';

export default function About (props) {
    const {name, image , price, reviews, rating, categories} = props.route.params

const formattedCategories = categories.map((cat) => cat.title).join(" • ");


const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  
    return (
      <View>
        <RestaurantImage image = {image} />
        <RestaurantName name = {name} />
        <RestaurantDescription description ={description}/>
      </View>
    );
  
}
const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: "100%" ,height:180}} />
)
const RestaurantName = (props) => (
    <Text style={{
        fontSize:29,
        fontWeight: "600",
        marginTop:10,
        marginHorizontal:15,
    }}>{props.name}</Text>
)
const RestaurantDescription = (props) => (
    <Text style={{
        marginTop:10,
        marginHorizontal:15,
        fontWeight: "400",
        fontSize: 15.5,
    }}>{props.description}</Text>
)
