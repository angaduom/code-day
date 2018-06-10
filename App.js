import React from 'react';
import { ToastAndroid, Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  
	onPressLearnMore() {
		console.log("Hi Xiaolei!");
		ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
	}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello Julia how are you today!</Text>
        <Text style={styles.text}>This is an Android app.</Text>
        <Text style={styles.text}>Made using react native.</Text>
	<Button
  		onPress={this.onPressLearnMore}
 		title="Hello Hershey"
  		color="red"
  		accessibilityLabel="Learn more about this purple button"
	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#234567'
  },

  text: {
	color:'whitesmoke'
  }
});
