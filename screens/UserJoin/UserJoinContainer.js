import React, { Component } from 'react';
import UserJoinPresenter from './UserJoinPresenter';

class UserJoinContainer extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("title")
        };
    };
    state = {
        id: '',
        password: '',
        name: ''
    }

    onPressButton = () => {
        const { id, password, name} = this.state;
        const data = {
            id,
            password,
            name
        };
        this.props.signUp(data);
    }

    onChangeText = (inputName, value) => {
        this.setState({
            [inputName]: value
        });
    }

    render(){
        console.log('isSignedUp : ', this.props.isSignedUp);
        const {id, password, name} = this.state;
        return (
            <UserJoinPresenter 
                onPressButton={this.onPressButton}
                id={id}
                password={password}
                name={name}
                onChangeText={this.onChangeText}
            />
        )
    }
}

export default UserJoinContainer;