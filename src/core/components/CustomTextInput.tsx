import React, { FC } from 'react';
import { StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

interface IProps {
  style?: StyleProp<ViewStyle>;
}
const CustomInput: FC = (props: IProps) => {
  const { style } = props;
  return (
    <TextInput mode="outlined" style={[styles.container, style]} {...props} />
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    width: '100%',
  },
});

export default CustomInput;

// import React from 'react';
// import { StyleProp, ViewStyle } from 'react-native';
// import { TextInput } from 'react-native-paper';

// type ICustomInputProps<T> = {
//   value?: string;
//   onChangeText?: (value: string) => void;
//   style?: StyleProp<ViewStyle>;
// };

// function CustomInput<T extends any>(props: ICustomInputProps<T>) {
//   return <TextInput mode="outlined" {...props} />;
// }

// export default CustomInput;
