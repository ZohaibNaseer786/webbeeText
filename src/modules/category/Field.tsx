import React, { FC, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Menu } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomInput from '~core/components/CustomTextInput';
import { FieldDataList } from '~core/dataSets/FieldDataList';
import { useStore } from '~zustand';

const Field: FC = ({ item, fieldIndex, categoryIndex }) => {
  const removeField = useStore(state => state.removeField);
  const updateFieldName = useStore(state => state.updateFieldName);
  const updateFieldValue = useStore(state => state.updateFieldValue);

  const [visible, setVisible] = useState<boolean>(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const onDelPress = () => removeField(fieldIndex, categoryIndex);

  const onUpdateFieldNameAndType = item => {
    closeMenu();
    updateFieldName(fieldIndex, categoryIndex, item?.title, item?.type);
  };

  const onUpdateFieldValue = txt => {
    updateFieldValue(fieldIndex, categoryIndex, txt);
  };

  return (
    <View key={item?.id} style={styles.rowFlex}>
      <View style={styles.fieldInputContainer}>
        <CustomInput
          label="Field"
          value={item?.value}
          onChangeText={onUpdateFieldValue}
        />
      </View>

      <TouchableOpacity
        onPress={openMenu}
        style={[styles.typeText, styles.txtBorder]}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Text>{item?.name}</Text>}>
          {FieldDataList.map(item => (
            <Menu.Item
              key={item.id?.toString()}
              onPress={() => onUpdateFieldNameAndType(item)}
              title={item.title}
            />
          ))}
        </Menu>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onDelPress}
        style={[styles.typeText, styles.removeContainer]}>
        <MaterialCommunityIcons name="delete" size={24} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({
  typeText: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '20%',
    marginTop: 5,
  },
  txtBorder: {
    flex: 0.7,
    borderWidth: 1,
    borderColor: 'thistle',
    marginLeft: 5,
  },
  rowFlex: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  fieldInputContainer: {
    flex: 1.5,
  },
  removeContainer: {
    flex: 0.3,
  },
});
