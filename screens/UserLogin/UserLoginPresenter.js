import React from 'react';
import styled from 'styled-components';
import { withNavigation } from "react-navigation";
import TextInput from "../../components/TextInput";

const Container = styled.View`
    display: flex;
    flex-direction: column;
`;

const TextInputContainer = styled.View`
    height: 90%;
    padding: 10px 10px 10px 0px;
`;


const BottomContaier = styled.View`
    background-color: white;
    height: 10%;
`;
const LoginButton = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 10px;
    background-color: #FF8000;
    height: 100%;
`;

const LoginButtonText = styled.Text`
    text-align: center;
    font-size: 25px;
    line-height: 40px;
    color: white;
`;

const Text = styled.Text`
`;


const UserLoginPresenter = ({pushLogin, navigation, onPressButton, onChangeText, id, password}) => (
    <Container>
        <TextInputContainer>
            <Text>
                아이디 :
            </Text>
            <TextInput 
                inputName={"id"} 
                isFocus={true} 
                value={id}
                placeholder={"아이디를 입력해주세요"} 
                handleTextInput={onChangeText} 
            />
            <Text>
                비밀번호 :
            </Text>
            <TextInput 
                inputName={"password"}
                isFocus={true} 
                value={password}
                placeholder={"비밀번호 입력해주세요"} 
                handleTextInput={onChangeText} 
            />
            <Text>아직 회원이 아니신가요?</Text>
            <Text onPress={() => pushLogin(navigation)}>회원가입</Text>
        </TextInputContainer>
        <BottomContaier>
            <LoginButton onPress={onPressButton}>
                <LoginButtonText>
                    로그인하기
                </LoginButtonText>
            </LoginButton>
        </BottomContaier>
    </Container>
);

export default withNavigation(UserLoginPresenter);