import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
    background-color: #F2F2F2;
    width: 100%;
    height: 100%;
`;

const TopView = styled.View`
    height: 60px;
    padding: 15px;
    margin-bottom: 30px;
`;

const TopText = styled.Text`
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    background-color: white;
`;

const ListContainer = styled.View`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const View = styled.View`
    width: 30%;
    
`;
// const TextView = styled.View`
//     width: 100%;
//     height: 50px;
//     border: 1px solid gray;
// `;

const BtnContainer = styled.TouchableOpacity`
`;

const TextContainer = styled.View`
    width: 100%;
    height: 50px;
`;
const Text = styled.Text`
    text-align: ${props => props.position === 'center' ? 'center' : 'left'};
    margin-left: ${props => props.position === 'left' ? '10px' : '0px'};
    line-height: 50px;
    font-size: 15px;
    background-color: ${props => props.click? '#F2F2F2' : 'white'};
`;

const ScrollView = styled.ScrollView`
    width: 70%;
    height: 100%;
    background-color: white;
`;


const citys = ["서울", "부산", "경기"];
const LocationPresenter = ({}) => (
    <Container>
        <TopView>
            <TopText>
                내 주변 제휴점 보기
            </TopText>
        </TopView>
        <ListContainer>
            <View>
                {citys.map((city, index) => (
                    <BtnContainer onPress={()=> console.log(`${city}를 클릭하였습니다.`)} key={index}>
                        <TextContainer>
                            <Text click={true} position='center'>{city}</Text>
                        </TextContainer>
                    </BtnContainer>
                    )
                )}
            </View>
            <ScrollView>
                <Text position={'left'}>강남/역삼/삼성</Text>
                <Text position={'left'}>신사/압구정</Text>
                <Text position={'left'}>연남/연희</Text>
            </ScrollView>
        </ListContainer>
        
    </Container>
);

export default LocationPresenter;