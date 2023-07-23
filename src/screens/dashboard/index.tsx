import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Button from '~core/components/Button';
import DateComponent from '~core/components/DateComponent';
import { navigate } from '~core/utils/NavigationUtil';
import { ICategory } from '~modules/category/types/Types';
import Category from '~modules/dashboard/Category';
import { CSS } from '~theme/styles';
import { ScreensName } from '~theme/styles/Strings';
import { useStore } from '~zustand';

const DashBoard = ({ item }) => {
  const categoryList = useStore(state => state.categoryList);

  return (
    <View style={[CSS.fill]}>
      <FlatList
        keyExtractor={item => item?.id}
        data={categoryList}
        renderItem={({ item, index }: { item: ICategory; index: number }) => (
          <Category item={item} categoryIndex={index} />
        )}
      />

      {/* <DateComponent
        dateObj={item => {
          console.log(item);
        }}
        title={'aaaaaaaaa'}
        iconName={'calendar'}
        value={'12'}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DashBoard;
