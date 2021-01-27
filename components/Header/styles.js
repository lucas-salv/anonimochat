import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    padding: 30px 40px;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.secondaryColor};
`;

export const Avatar = styled.View``;

export const Img = styled.Image`
    width: 50px;
    height: 50px;
    background-color: ${props => props.theme.secondaryColor};
    border-radius: 50px;
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
    color: ${props => props.theme.secondaryFontColor};
`;

export const Status = styled.Text`
    color: ${props => props.theme.statusColor};
    font-size: 12px;
`;

export const ExitButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const Text = styled.Text`
    margin-right: 5px;
    color: ${props => props.theme.secondaryFontColor};
`;