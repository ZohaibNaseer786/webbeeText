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
  categoryIndex: number;
}
const Category = ({ item, categoryIndex }: ICategoryProps) => {
  const setNewField = useStore(state => state.setNewField);
  const setSelectedField = useStore(state => state.setSelectedField);
  const updateCategoryName = useStore(state => state.updateCategoryName);
  const deleteCategory = useStore(state => state.deleteCategory);

  const [visible, setVisible] = useState<boolean>(false);
  const [titleFieldVisible, setTitleFieldVisible] = useState<boolean>(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const openTitleField = () => setTitleFieldVisible(true);

  const closeTitleField = () => setTitleFieldVisible(false);

  const getBtnTitle = item?.selectedField
    ? item?.selectedField?.value
    : item?.fields?.length > 0
    ? item?.fields[0]?.value?.length > 0
      ? item?.fields[0]?.value
      : 'UNNAMED FIELD'
    : 'UNNAMED FIELD';

  const onAddNewField = item => {
    closeMenu();
    const data = {
      id: uuid.v4()?.toString(),
      CategoryId: item?.id ?? null,
      name: item?.title,
      type: item?.type,
      value: null,
    };
    setNewField(data, categoryIndex);
  };

  const onChangeSelectedField = item => {
    closeTitleField();
    setSelectedField(item, categoryIndex);
  };

  const updateName = txt => updateCategoryName(categoryIndex, txt);

  return (
    <View style={[styles.conatiner]}>
      <Text>{item?.name ?? 'New Catagory'}</Text>
      <View style={[CSS.mt1]}>
        <CustomInput
          label="Catagory Name"
          value={item?.name}
          onChangeText={updateName}
        />

        {item?.fields?.map((item, index) => (
          <Field item={item} fieldIndex={index} categoryIndex={categoryIndex} />
        ))}

        <Menu
          visible={titleFieldVisible}
          onDismiss={closeTitleField}
          anchor={
            <Button
              style={[CSS.mt1]}
              title={`TITLE FIELD: ${getBtnTitle}`}
              onPress={openTitleField}
            />
          }>
          {item?.fields?.map(item => {
            return (
              <Menu.Item
                key={item.id?.toString()}
                onPress={() => onChangeSelectedField(item)}
                title={item?.value?.length > 0 ? item?.value : 'UNNAMED FIELD'}
              />
            );
          })}
        </Menu>
      </View>
      <View style={[CSS.row, CSS.alignItemsCenter, CSS.mt1]}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button
              title={'ADD NEW FIELD'}
              mode="outlined"
              onPress={openMenu}
            />
          }>
          {FieldDataList.map(item => (
            <Menu.Item
              key={item.id?.toString()}
              onPress={() => onAddNewField(item)}
              title={item.title}
            />
          ))}
        </Menu>
        <Button
          icon="delete"
          title={'REMOVE'}
          mode="text"
          onPress={() => deleteCategory(categoryIndex)}
          style={styles.removeBtn}
        />
      </View>
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
  removeBtn: {
    marginLeft: '2%',
  },
});
