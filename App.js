import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

import HomeScreen from "./src/screens/Home/index"

export default function App() {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen/>
      </SafeAreaView>
    </View>
  );
}