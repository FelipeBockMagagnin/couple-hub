import { Text, View, StyleSheet, Image, ScrollView, Button } from "react-native";
import colors from '../styles/Colors';
import { useState, useEffect } from "react";
import AuthContext from "../contexts/auth";
import { useContext } from "react";
import globalStyles from '../styles/GlobalStyles'
import { REACT_APP_API_URL } from '../../env';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import { PrimaryTitle, TextWhite } from "../components/Text";


export default function ProfileScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!user) return;
  }, [isFocused])

  return (
    <ScrollView style={globalStyles.container}>
      <Button onPress={() => navigation.goBack()} title="Go back"></Button>
      <Button onPress={() => navigation.navigate('SignIn')} title="Loggout"></Button>

      <View style={styles.profileImageContainer}>

        {/* <Image source={{ uri: user.google_data.picture }} style={styles.profileImage} /> */}

        <View>
          <PrimaryTitle style={{ textAlign: 'center' }}>Name: {user.google_data.name}</PrimaryTitle>

          <View style={[globalStyles.flex, { justifyContent: 'space-around' }]}>
            <View>
              <Text>Content</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 70,
  },
  profileImageContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  container: {
    margin: 10,
  },
  mt20: {
    marginTop: 20
  },
  gameList: {
    display: 'flex',
    flexDirection: 'row',
  }
});