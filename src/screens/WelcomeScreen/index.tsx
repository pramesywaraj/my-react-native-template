import React from 'react';
import {View, Text} from 'react-native';

import styles from 'screens/WelcomeScreen/styles';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHello}>
        Ciao!
      </Text>
      <Text style={styles.textWelcome}>
        Welcome to the React Native configured project template
      </Text>
    </View>
  );
};

export default Welcome;
