import React, { Component } from 'react';
import UserLoginPresenter from './UserLoginPresenter';

class UserLoginContainer extends Component {
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
          console.log(id, password);
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