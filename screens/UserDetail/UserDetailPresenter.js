import React from 'react'
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';

const Container = styled.View`

`;
const Text = styled.Text`

`;
const UserDetailPresenter = ({handleLogout, me, navigation}) => (
    <Container>
        <Text>
            {me && me.name}님 환영합니다.
        </Text>
        
        <Text onPress={handleLogout}>
            로그아웃
        </Text>
    </Container>
);

export default withNavigation(UserDetailPresenter);