import styled from 'styled-components/native';

export const ContainerTitle = styled.View``;

export const AppName = styled.Text`
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