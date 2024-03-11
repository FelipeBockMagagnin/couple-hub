import { Text, View, StyleSheet, ScrollView, Button } from "react-native";
import colors from '../styles/Colors';
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Home</Text>
        <Button onPress={() => navigation.navigate('Profile')} title="Profile"></Button>
        <Button onPress={() => navigation.navigate('Settings')} title="Settings"></Button>
        <Button onPress={() => navigation.navigate('ShoppingList')} title="ShoppingList"></Button>
        <Button onPress={() => navigation.navigate('TodoList')} title="TodoList"></Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});