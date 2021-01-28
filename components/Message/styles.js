import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: ${props => props.isYou ? "flex-end" : "flex-start"};
    margin-bottom: 10px;
`;

export const Text = styled.Text`
    max-width: 80%;
    padding: 20px;
    background-color: ${props => props.isYou ? props.theme.mainColor : props.theme.secondaryColor};
    color: ${props => props.isYou ? props.theme.secondaryFontColor : props.theme.fontColor};
    font-weight: bold;
    border-radius: 10px;
    border-top-right-radius: ${props => props.isYou ? 0 : "10px"};
    border-top-left-radius: ${props => props.isYou ? "10px" : 0};
`;

export const Date = styled.Text`
    align-self: ${props => props.isYou ? "flex-end" : "flex-start"};
    color: ${props => props.theme.fontColor};
    font-size: 12px;
    margin-top: 2px;
`;