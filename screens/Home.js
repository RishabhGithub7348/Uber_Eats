import React, { useEffect ,useState } from 'react'

import { Text, View , ScrollView, SafeAreaView} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/BottomTabs';

import Categories from '../components/home/Categories';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import HeaderTabs from '../components/home/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';

const YELP_API_KEY = 
"f9LYTHcy6uAOwn61-Ue56O_W2G61dt2AJk9XBpjotQJ3f7Vh_5vIOEU5KOyoALM_aTMTuFUg2bwHLrkjSx0x7MgyHqV9UtwVlTmH3aPsPZdePl3qOUBzMbfij8zzYXYx";

 const  Home = ({navigation}) => {
 
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = useState("Indian");
  const [activeTab, setActiveTab] = useState("Delivery")
  
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

    return (
       
        <SafeAreaView style ={{backgroundColor: "#eee",flex:1}}>
          <View >
            <Text style={{ fontSize: 28, color: 'white' }}></Text>
          </View>
        <View style={{backgroundColor:"white", padding:15}}>
        <HeaderTabs
         activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
        <SearchBar
        cityHandler={setCity}
        />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
       <RestaurantItems 
       restaurantData={restaurantData} 
       navigation = {navigation}
       
        />
        </ScrollView>
        <Divider width ={1} />
        <BottomTabs/>
      
        </SafeAreaView>
        
      );
    };
    
 
export default Home;