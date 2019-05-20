import React from 'react';
import { Text, View, TextInput } from 'react-native';

const CreateAccountInput = ({ label, placeholder, onChangeText, topMargin }) => {
  const { textStyle, inputStyle } = styles;

  return (
    <View>
      <Text style={[{ top: { topMargin } + 20 }, textStyle]}>{label}</Text>
      <TextInput
        style={[{ top: { topMargin } }, inputStyle]}
        placeholder={placeholder}
        returnKeyLabel={'next'}
        autoCorrect={false}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 15,
    marginLeft: 60,
    color: 'gray',
  },
  inputStyle: {
    marginLeft: 130,
    marginRight: 60,
    borderBottomWidth: 1,
  }
};

export { CreateAccountInput };
