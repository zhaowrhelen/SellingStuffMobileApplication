import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../components/Card";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        source={require("../assets/couch.png")}
        style={styles.image}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Blue couch for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/profile-img.jpg")}
            title="Helen Zhao"
            subTitle="5 Listings"
          ></ListItem>
        </View>
      </View>

      {/* <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("../assets/couch.png")}
      ></Card> */}
    </View>
  );
}
const styles = StyleSheet.create({
  // text: {
  //   top: 80,
  //   fontSize: 80,
  // },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
