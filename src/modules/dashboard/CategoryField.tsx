import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { json } from 'stream/consumers';
// import { Menu } from 'react-native-paper';
// import { Switch } from 'react-native-paper';
// import uuid from 'react-native-uuid';
import Button from '~core/components/Button';
import CustomInput from '~core/components/CustomTextInput';
import { theme } from '~theme';
import { CSS } from '~theme/styles';
import { useStore } from '~zustand';

import Field from './Field';

interface ICategoryProps {
  item: ICategory;
  categoryId: string;
}
const Category = ({ item, categoryId }: ICategoryProps) => {
  // const getBtnTitle = item?.selectedField
  //   ? item?.selectedField?.value
  //   : item?.fields?.length > 0
  //   ? item?.fields[0]?.value?.length > 0
  //     ? item?.fields[0]?.value
  //     : 'UNNAMED FIELD'
  //   : 'UNNAMED FIELD';

  const renderChild = ({ child }) => {
    return (
      <View style={[CSS.mt1]}>
        <CustomInput
          label={`${child?.value ?? 'Catagory Name'}`}
          value={'item?.name'}
          onChangeText={() => {}}
        />
      </View>
    );
  };
  return (
    <View style={[styles.subConatiner, CSS.mt1]}>
      <FlatList
        keyExtractor={i => i?.id}
        data={item?.child}
        renderItem={renderChild}
      />
      <Button
        icon="delete"
        title={'REMOVE'}
        mode="text"
        onPress={() => {}}
        style={[CSS.mt1]}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  conatiner: {
    margin: '2%',
    padding: '3%',
    backgroundColor: theme.colors.white,
  },
  subConatiner: {
    margin: '2%',
    padding: '3%',
    backgroundColor: theme.colors.white,
  },
});
