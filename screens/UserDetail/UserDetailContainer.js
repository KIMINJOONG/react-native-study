import React, { Component } from 'react';
import UserDetailPresenter from './UserDetailPresenter';
import { AsyncStorage } from 'react-native';

class UserDetailContainer extends Component {
    async componentDidMount(){
        const token = await AsyncStorage.getItem('token');
        if(!token){
            this.props.navigation.navigate('Login');
        }
    }
    handleLogout = () => {
        this.props.logoutAction();
        alert('로그아웃 되었습니다.');
        this.props.navigation.navigate('Movie');
    };
    render(){
        return(
            <UserDetailPresenter handleLogout={this.handleLogout} />
        );
    }
}

export default UserDetailContainer;