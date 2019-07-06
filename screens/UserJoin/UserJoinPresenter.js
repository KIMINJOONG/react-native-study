import React from 'react';
import styled from 'styled-components';
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
const JoinButton = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 10px;
    background-color: #FF8000;
    height: 100%;
`;

const JoinButtonText = styled.Text`
    text-align: center;
    font-size: 25px;
    line-height: 40px;
    color: white;
`;



const UserJoinPresenter = ({onPressButton, onChangeText, id, password, name}) => (
    <Container>
        <TextInputContainer>
            <TextInput 
                inputName={"id"} 
                isFocus={true} 
                value={id}
                placeholder={"아이디를 입력해주세요"}
                handleTextInput={onChangeText}
            />
            <TextInput 
                inputName={"password"} 
                isFocus={true} 
                value={password}
                placeholder={"비밀번호를 입력해주세요"}
                handleTextInput={onChangeText}
            />
            <TextInput 
                inputName={"name"} 
                isFocus={true} 
                value={name}
                placeholder={"이름을 입력해주세요"}  
                handleTextInput={onChangeText}
            />
        </TextInputContainer>
        <BottomContaier>
            <JoinButton onPress={onPressButton}>
                <JoinButtonText>
                    가입하기
                </JoinButtonText>
            </JoinButton>
        </BottomContaier>
        
    </Container>    
);

export default UserJoinPresenter;