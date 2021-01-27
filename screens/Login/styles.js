import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: ${props => props.theme.background};
    padding: 60px;
    font-family: Lato sans-serif;
`;

export const ContainerTitle = styled.View`

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

export const Title = styled.Text`
    text-align: center;
    color: ${props => props.theme.mainColor};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Span = styled.Text`
    color: ${props => props.theme.mainColor}99;
    font-style: italic;
`;

export const Desc = styled.Text`
    text-align: center;
    color: ${props  => props.theme.fontColor};
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