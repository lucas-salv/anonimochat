import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    height: 100%;
    padding: 60px;
    background-color: ${props => props.theme.background};
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
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

export const ExitButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const TextBtn = styled.Text`
    margin-right: 5px;
    color: ${props => props.theme.contrastColor};
`;

export const Icon = styled(MaterialIcons)`
    color: ${props => props.theme.contrastColor};
    font-size: 24px;
`