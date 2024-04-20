import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import CartScreen from '../screen/CartScreen';
import FavoritesScreen from '../screen/FavoritesScreen';
import OrderHistoryScreen from '../screen/OrderHistoryScreen';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.blurViewStyle}
          />
        ),
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="home"
              size={28}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="shopping-bag"
              size={23}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="heart"
              size={23}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
        name="Like"
        component={FavoritesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="bell"
              size={23}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
        name="History"
        component={OrderHistoryScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default TabNavigator;
