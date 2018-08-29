import React from 'react';


import {
	Text,
	View,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	Image,
	Button,
	Alert,
	Platform,
	TouchableHighlight
} from "react-native";



const LinkButton = ({title, onPressHandler}) => {
    return (        
        <TouchableHighlight
          onPress={onPressHandler}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableHighlight>
        
      )
};

const styles = {
  button: {      
      width: 120,
      height: 50,
      
      backgroundColor: '#2f7898',
      justifyContent: 'center',
      alignItems: 'center' 
  },
  buttonText: {
    //padding: 10,    
    color: '#ffffff',
    fontSize: 18,    
}
};

export { LinkButton };
