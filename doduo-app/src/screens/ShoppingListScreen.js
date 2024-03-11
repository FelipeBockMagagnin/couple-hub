import { Text, View, StyleSheet, ScrollView, Button } from "react-native";
import colors from '../styles/Colors';
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function Shoppinglistscreen({ navigation }) {
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
        <Text>Shopping List</Text>
        <Button onPress={() => navigation.goBack()} title="Go back"></Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});