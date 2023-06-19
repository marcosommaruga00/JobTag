import styled from 'styled-components/native';

const StandardButton = styled.Pressable`
    background-color: #142A39;
    width: 324px;
    height: 50px;
    padding: 10px;
    border-radius: 20px;
    margin: 10px;
    justify-content: center;
    `;
export { StandardButton };

const CallButton = styled.Pressable`
    background-color: #30D158;
    width: 79px;
    height: 75px;
    padding-left: 7px;
    border-radius: 99px;
    z-index: 1;
    margin-bottom: -122px;
    margin-left: 122px;
    justify-content: center;
    `;
export { CallButton };

const NotificationButton = styled.Pressable`
    background-color: #30D158;
    width: 79px;
    height: 75px;
    padding-left: 0px;
    border-radius: 99px;
    z-index: 1;
    margin-bottom: -98px;
    margin-left: 2px;
    justify-content: center;
    `;
export { NotificationButton };

const SettingButton = styled.Pressable`
    background-color: rgba(255, 255, 255, 0);
    width: 79px;
    height: 75px;
    padding-left: 1px;
    border-radius: 99px;
    z-index: 999;
    margin-bottom: -355px;
    margin-left: 290px;
    justify-content: center;
    `;
export { SettingButton };

const QRButton = styled.Pressable`
    background-color: rgba(255, 255, 255, 0);
    width: 79px;
    height: 75px;
    padding-left: 0px;
    border-radius: 99px;
    z-index: 999;
    margin-bottom: -355px;
    margin-left: -20px;
    justify-content: center;
    `;
export { QRButton };