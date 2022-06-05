import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Welcome from 'screens/WelcomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.screenSafeArea}>
      <Welcome />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenSafeArea: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});

export default App;
