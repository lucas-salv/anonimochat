import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    height: 90px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0px 40px;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.secondaryColor};
`;

export const Avatar = styled.View``;

export const Img = styled.Image`
    width: 50px;
    height: 50px;
    resize-mode: contain;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Info = styled.View`
    margin-left: 10px;
`;

export const Nickname = styled.Text`
    font-weight: bold;
    color: ${props => props.theme.contrastColor};
`;

export const Status = styled.Text`
    color: ${props => props.typeColor === "Ausente" ? props.theme.statusColor2 : props.theme.statusColor};
    font-size: 12px;
`;

export const ExitButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const Text = styled.Text`
    margin-right: 5px;
    color: ${props => props.theme.contrastColor};
`;

export const Icon = styled(MaterialIcons)`
    color: ${props => props.theme.contrastColor};
    font-size: 24px;
`