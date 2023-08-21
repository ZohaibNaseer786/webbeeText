import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Button from '~core/components/Button';
import { ICategory } from '~modules/category/types/Types';
import { theme } from '~theme';
import { CSS } from '~theme/styles';
import { useStore } from '~zustand';

import CategoryField from './CategoryField';

const Category = ({
  item,
  categoryIndex,
}: {
  item: ICategory;
  categoryIndex: number;
}) => {
  const createNewSubCategory = useStore(state => state.createNewSubCategory);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          CSS.row,
          CSS.justifyContentBetween,
          CSS.alignItemsCenter,
          CSS.mainPadding,
          CSS.pt2,
        ]}>
        {/* <Text style={styles.textStyle}>No item to displan</Text> */}
        <Text style={styles.textStyle}>{item?.name}</Text>

        <Button
          title={'ADD NEW ITEM'}
          onPress={() => createNewSubCategory(categoryIndex)}
        />
      </View>
      <FlatList
        keyExtractor={le => le?.id}
        data={item?.children}
        renderItem={({ i, index }) => (
          <CategoryField item={i} categoryId={item?.id} />
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subConatiner: {
    margin: '2%',
    padding: '3%',
    backgroundColor: theme.colors.white,
  },
  textStyle: {
    marginBottom: 10,
  },
});
