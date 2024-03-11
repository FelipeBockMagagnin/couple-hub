import { Button, Text, View } from "react-native";

export default function Settings({navigation}) {
  return (
    <View>
        <Button onPress={() => navigation.goBack()} title="Go back"></Button>
        <Text>Settings</Text>
    </View>
  );
}