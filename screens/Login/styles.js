import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: ${props => props.theme.background};
    padding: 60px;
    font-family: Lato sans-serif;
`;

export const ContainerSVG = styled.View`
    width: 100px;
    height: 100px;
`;

export const ContainerForm = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.theme.secondaryColor};
    padding: 10px;
    border-radius: 5px;
`;

export const Input = styled.TextInput.attrs(props => ({
    placeholderTextColor: props.theme.fontColor
}))`
    width: 90%;
    color: ${props => props.theme.fontColor};
`;

export const Button = styled.TouchableOpacity`
    display: flex;
    align-items: flex-end;
    width: 10%;
`;