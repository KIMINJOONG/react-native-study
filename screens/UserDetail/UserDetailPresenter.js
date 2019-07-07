import React from 'react'
import styled from 'styled-components';

const Container = styled.View`

`;
const Text = styled.Text`

`;
const UserDetailPresenter = ({handleLogout}) => (
    <Container>
        <Text>
            디테일페이지
        </Text>
        <Text onPress={handleLogout}>
            로그아웃
        </Text>
    </Container>
);

export default UserDetailPresenter;