import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import CustomSideBarMenu from "./CustomSideBarMenu";
import { TabNavigator } from "./tabNavigator";
import { createDrawerNavigator } from "react-navigation-drawer";
import SettingScreen from '../screens/SettingScreen'
import MyBarter from '../screens/MyBarter'

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
    Settings: {
      screen: SettingScreen
    },
    MyBarter: {
      screen: MyBarter
    }
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: "Home",
  }
);
