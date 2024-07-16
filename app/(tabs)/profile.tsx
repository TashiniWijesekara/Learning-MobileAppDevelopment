import { View ,Text , Button , FlatList , StyleSheet} from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const DATA = [
  {id: 1, title: "Item 1"},
  {id: 2, title: "Item 2"},
  {id: 3, title: "Item 3"},
];
export default function profile() {
  return (
    <View>
        <Text>Profile</Text>
        <Button
            onPress={()=>router.back()}
            title="Learn More"
            color= "#B41584"
            accessibilityLabel="Learn more about this purple button" 
            />
     <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Text style={styles.nametext}>{item.title}</Text>
  )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  nametext: {
    height: 100,
    backgroundColor: 'red',
    margin: 10,
  },
});