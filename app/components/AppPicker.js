import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    //     <View style={styles.container}>
    //       {icon && (
    //         <MaterialCommunityIcons
    //           name={icon}
    //           size={20}
    //           color={colors.medium}
    //           style={styles.icon}
    //         ></MaterialCommunityIcons>
    //       )}
    //       <AppText style={styles.text}>{placeholder}</AppText>
    //       <MaterialCommunityIcons
    //         name="chevron-down"
    //         size={20}
    //         color={colors.medium}
    //       ></MaterialCommunityIcons>
    //     </View>
    //   );
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            ></MaterialCommunityIcons>
          )}
          <TextInput style={[defaultStyles.text, styles.text]}>
            {selectedItem ? selectedItem.label : placeholder}
          </TextInput>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          ></MaterialCommunityIcons>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              ></PickerItem>
            )}
          ></FlatList>
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
