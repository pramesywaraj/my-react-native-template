import React from 'react';
import {View, Text} from 'react-native';

import styles from 'screens/Welcome/styles';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>
        Hello!
      </Text>
      <Text>
        Welcome to the React Native configured project template
      </Text>
    </View>
  );
};

export default Welcome;
