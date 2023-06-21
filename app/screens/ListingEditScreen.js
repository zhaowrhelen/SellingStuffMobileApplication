import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";

import useLocation from "../hooks/useLocation";

import listingsApi from "../api/listings";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen(props) {
  const location = useLocation();

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing({ ...listing, location });
    if (!result.ok) {
      console.log(result.problem);
      console.log(result.status);
      console.log(listing);
      console.log(result.originalError);
      return alert("Could not save the listing.");
    }
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          maxLength={255}
          name="title"
          placeholder="Title"
          width={120}
        ></AppFormField>
        <AppFormField
          name="price"
          keyboardType="numeric"
          maxLength={8}
          placeholder="Price"
        ></AppFormField>
        <AppFormPicker
          items={categories}
          placeholder="Category"
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        ></AppFormPicker>
        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        ></AppFormField>
        <SubmitButton title="Post"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
