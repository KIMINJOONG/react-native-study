import React, { Component } from 'react';
import UserDetailPresenter from './UserDetailPresenter';
import { AsyncStorage } from 'react-native';

class UserDetailContainer extends Component {
    async componentDidMount(){
        const token = await AsyncStorage.getItem('token');
        if(!token){
            //this.props.navigation.navigate('UserLogin');
        }
    }
    handleLogout = () => {
        this.props.logoutAction();
        this.props.navigation.navigate('UserLogin');
        alert('로그아웃 되었습니다.');
        
    };
    render(){
        return(
            <UserDetailPresenter 
                handleLogout={this.handleLogout}
                me={this.props.me}
            />
        );
    }
}

export default UserDetailContainer;