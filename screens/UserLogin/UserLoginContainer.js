import React, { Component } from 'react';
import UserLoginPresenter from './UserLoginPresenter';
import { AsyncStorage } from 'react-native';

class UserLoginContainer extends Component {
    async componentDidMount(){
        const token = await AsyncStorage.getItem('token');
        if(token) {
            alert('이미 로그인 된 사용자입니다.');
            this.props.navigation.navigate('UserDetail');
        }
    }
    _pushLogin(navigation){
        navigation.navigate({
            routeName: 'UserJoin',
            params: {
                title: '회원가입'
            }
        });
      }
      state = {
          id: '',
          password: ''
      }

      onPressButton = () => {
          const { id, password } = this.state;
          const data = {
              id,
              password
          };
          this.props.loginAction(data);
          this.props.navigation.navigate('Tabs');
      };

      onChangeText = (inputName, value) => {
          this.setState({
              [inputName]: value
          });
      }

    render(){
        return(
            <UserLoginPresenter 
                pushLogin={this._pushLogin}
                onPressButton={this.onPressButton}
                onChangeText={this.onChangeText}
                id={this.state.id}
                password={this.state.password}
            />
        );
    }
}
export default UserLoginContainer;