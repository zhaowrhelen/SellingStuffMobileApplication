import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

// console.log(Constants);

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/profile-img.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/profile-img.jpg"),
  },
];

function MessageScreen(props) {
  // setState
  //   const array = useState(0);
  //   const count = array[0];
  //   const setCount = array[1];

  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDetele = (message) => {
    // delete the message from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
    // call the server
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDetele(item)} />
            )}
          ></ListItem>
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/profile-img.jpg"),
            },
          ]);
        }}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
