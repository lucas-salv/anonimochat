import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    height: 60px;
    background-color: ${props => props.theme.background};
    padding: 0 40px;
    border-width: 1px;
    border-top-color: ${props => props.theme.secondaryColor};
`;

export const Input = styled.TextInput.attrs(props => ({
    placeholderTextColor: props.theme.fontColor,
}))`
    width: 80%;
    color: ${props => props.theme.secondaryFontColor};
`;

export const SendButton = styled.TouchableOpacity`
    align-items: flex-end;
    width: 10%;
`;