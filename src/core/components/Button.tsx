import React, { ComponentProps } from 'react';
import { StyleProp, StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

type IButtonProps = {
  title?: string;
  style?: StyleProp<ComponentProps<typeof PaperButton>['style']>;
} & Omit<ComponentProps<typeof PaperButton>, 'children'>;

const Button = ({ title, style, ...props }: IButtonProps) => {
  return (
    <PaperButton style={[styles.container, style]} mode="contained" {...props}>
      {title}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
  },
});

export default Button;
