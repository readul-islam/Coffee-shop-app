import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
const getCategoriesFromDate = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }

  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  }
  let coffeeList = data.filter((item: any) => item.name == category);
  return coffeeList;
};

const HomeScreen = () => {
  const {CoffeeList, BeanList} = useStore((state: any) => state);

  const [categories, setCategories] = useState(
    getCategoriesFromDate(CoffeeList),
  );
  const [searchText, setSearchText] = useState(undefined);
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView contentContainerStyle={styles.ScrollViewFlex}>
        {/* App Header */}
        <HeaderBar title="Home" />
        <Text style={styles.ScreenTitle}>
          Find the best{'\n'}coffee for you
        </Text>
        {/* Search Input */}

        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
  
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
    fontWeight:'600',
    lineHeight:40
  },
});
export default HomeScreen;
