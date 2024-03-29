import React from 'react';
import { AppLoading, Font, Asset } from "expo";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainNavigation from "./navigation/MainNavigation";
import store from "./store";
import { Provider } from "react-redux";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = (error) => console.log(error);

  handleLoaded = () => this.setState({ loaded: true});

  loadAssets = async() => {
    await Font.loadAsync({
      ...Ionicons.font
    });

    //await Asset.loadAsync([

    //]);
  }

  render() {
    const {loaded} = this.state;
    if(loaded) {
      return (
        <Provider store={store}>
          <>
            <StatusBar barStyle="light-content" />
            <MainNavigation />
          </>
        </Provider>
      );
    } else {
      return (
        <AppLoading startAsync={this.loadAssets} onFinish={this.handleLoaded} onError={this.handleError} />
      );
    }
  }
}
