import { styled } from "styled-components/native";
import { TouchableOpacity } from "react-native";

    export const Container = styled.View`
        width: 100%;
        background-color: #ffffff;
        border-radius: 5px;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
    `

    export const Name = styled.Text`
        flex: 1;
        color: #000000;
        font-size: 18px;
        margin-left: 16px;
    `
    export const ButtonText = styled.Text`
        color: #ffffff;
        font-size: 24px;
    `

    export const Button = styled(TouchableOpacity)`
       width: 56px;
       height: 56px; 
       border-radius: 5px;
       background-color: red;
       align-items: center;
       justify-content: center;
    `