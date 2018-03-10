import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {

	state = {
		loggedIn: null
	}

	componentWillMount() {
		firebase.initializeApp({
		    apiKey: "AIzaSyBTovUpltbTrC6Vzd6jF3emxOAr0ivwPCk",
		    authDomain: "authentication-c4294.firebaseapp.com",
		    databaseURL: "https://authentication-c4294.firebaseio.com",
		    projectId: "authentication-c4294",
		    storageBucket: "authentication-c4294.appspot.com",
		    messagingSenderId: "185455024557"
		  })

	  firebase.auth().onAuthStateChanged((user) => {
		  if (user) {
			  this.setState({loggedIn: true});
		  } else {
			  this.setState({loggedIn: false});
		  }
	  })
	}

	renderContent() {
		switch(this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
				)
			case false:
				return <LoginForm />
			default:
				return <Spinner />
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication"/>
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
