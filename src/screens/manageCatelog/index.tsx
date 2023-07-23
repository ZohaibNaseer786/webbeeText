import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Button from '~core/components/Button';
import Category from '~modules/category/Category';
import { ICategory } from '~modules/category/types/Types';
import { CSS } from '~theme/styles';
import { useStore } from '~zustand';

const ManageCatalog = () => {
  const categoryList = useStore(state => state.categoryList);
  const createNewCategory = useStore(state => state.createNewCategory);

  return (
    <View style={[CSS.fill]}>
      <FlatList
        keyExtractor={item => item?.id}
        data={categoryList}
        renderItem={({ item, index }: { item: ICategory; index: number }) => (
          <Category item={item} categoryIndex={index} />
        )}
      />

      <Button
        title={'ADD NEW CATAGORY'}
        onPress={() => createNewCategory()}
        style={styles.addNewCatagoryBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addNewCatagoryBtn: {
    // position: 'absolute',
    width: '100%',
    bottom: 20,
  },
});

export default ManageCatalog;
