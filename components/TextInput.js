import React from 'react';
import styled from 'styled-components';

const Input = styled.TextInput`
    border: 1px solid ${props => props.isFocus ? '#FF8000' : 'gray'};
    margin-top: 10px;
    height: 30px;
`;
const TextInput = ({inputName, value, placeholder, handleTextInput}) => (
    <Input
        secureTextEntry={inputName === 'password' ? true : false} 
        password={inputName === 'password' ? true : false}
        name={inputName}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleTextInput(inputName, e.nativeEvent.text)}
    />
);

export default TextInput;