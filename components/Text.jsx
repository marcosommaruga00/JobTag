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
    margin-top: 30px;
    margin-bottom: 30px;
`;

const BaseText = styled.Text`
    font-size: 20px;
    color: #000;
    text-align: ${(props) => props.align || "center"};
    text-transform: uppercase;
`;

const BaseText2 = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: 10px;
    color: #000;
    text-align: ${(props) => props.align || "center"};
    text-transform: uppercase;
    text-decoration: underline;
    margin: 5px;
`;

const Indication = styled.Text`
    font-family: 'Montserrat-SemiBold';
    font-size: 15px;
    color: #000;
    text-align: left;
    text-transform: none;
    margin-left: 20px;
    margin-bottom: 15px;
    background-color: 'rgba(255, 255, 255, 0)';
`;

const Label = styled.Text `
    font-family: 'Poppins-SemiBold';
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    `;

const Input = styled.TextInput `
    font-family: 'Poppins-Regular';
    background-color: #fff;
    width: 320px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    margin: 5px;
    justify-content: center;
    `;

const ComingSoon = styled.Text `
    font-family: 'Montserrat-Bold';
    font-size: 20px;
    color: #000;
    text-align: center;
    text-transform: uppercase;
    margin-top: 60px;
    `;

const Undercard = styled.Text `
    font-family: 'Poppins-Regular';
    font-size: 10px;
    color: #142A6E;
    text-align: center;
    text-transform: uppercase;
    `;
export { Label, Title, Input, BaseText, BaseText2, Title2, ComingSoon, Indication, Undercard }
