import styled from "styled-components/native";

const Title = styled.Text`
    font-size: 20px;
    color: #000;
    text-align: center;
    text-transform: uppercase;
    margin-top: 60px;
`;

const Title2 = styled.Text`
    font-family: 'Montserrat-Bold';
    font-size: 40px;
    color: #000;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 30px;
`;

const BaseText = styled.Text`
    font-size: 20px;
    color: #000;
    text-align: ${(props) => props.align || "center"};
    text-transform: uppercase;
`;

const BaseText2 = styled.Text`
    font-size: 10px;
    color: #000;
    text-align: ${(props) => props.align || "center"};
    text-transform: uppercase;
    text-decoration: underline;
    margin: 5px;
`;

const Label = styled.Text `
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    `;

const Input = styled.TextInput `
    background-color: #fff;
    width: 320px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    margin: 5px;
    justify-content: center;
    `;

export { Label, Title, Input, BaseText, BaseText2, Title2 }
