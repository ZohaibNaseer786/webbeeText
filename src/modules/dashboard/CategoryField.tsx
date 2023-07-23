import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Menu } from 'react-native-paper';
import uuid from 'react-native-uuid';
import Button from '~core/components/Button';
import CustomInput from '~core/components/CustomTextInput';
import { FieldDataList } from '~core/dataSets/FieldDataList';
import { theme } from '~theme';
import { CSS } from '~theme/styles';
import { useStore } from '~zustand';

import Field from './Field';
import { ICategory } from './types/Types';

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

  return (
    <View style={[CSS.mt1]}>
      <CustomInput
        label={`${item?.value ?? 'Catagory Name'}`}
        value={'item?.name'}
        onChangeText={() => {}}
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
});
