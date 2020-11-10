import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import PropTypes from 'prop-types';

const getText = (type) => {
  let icn;
  switch (type) {
    case 'Open':
      return 'การเติม';
    case 'In Progress':
      return 'การถอน';
    case 'Complete':
      return 'การใช้จ่าย';
  }
  return icn;
};

const Button = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
        <Text style={{color: props.active ? 'white' : '#989898'}}>
          {getText(props.type)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  active: false,
};

export default Button;
