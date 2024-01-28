import React from 'react';
import {Text} from 'react-native';
import propTypes from 'prop-types';
import style from './style';

const MyText = ({name}) => {
  const pressHandler = () => {
    alert('You just pressed the text component');
  };
  return (
    <Text style={style.text} onPress={pressHandler}>
      Hello, {name}
    </Text>
  );
};

MyText.propTypes = {
  name: propTypes.string.isRequired,
};

export default MyText;
