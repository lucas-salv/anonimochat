import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 60px;
    background-color: ${props => props.theme.background};
`;

export const Title = styled.Text`
    color: ${props => props.theme.mainColor};
    font-size: 20px;
    font-weight: bold;
`;

export const Text = styled.Text`
    color: ${props => props.theme.fontColor};
    text-align: center;
    margin: 10px 0;
`;