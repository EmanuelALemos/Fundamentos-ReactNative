import styled from 'styled-components/native';
import { TextInput, TouchableOpacity } from 'react-native';

    export const Container = styled.View`
      flex: 1;
      background-color: #008080;
      padding: 24px;
    `
  
    export const EventName = styled.Text`
      color: white;
      font-size: 24px;
      font-weight: bold;
      margin-top: 48px;
    `
  
    export const EventLocal = styled.Text`
      color: white;
      font-size: 18px;
    `

    export const Input = styled(TextInput)`
        flex: 1;
        height: 56px;
        background-color: white;
        border-radius: 5px;
        color: black;
        padding: 16px;
        font-size: 18px;
        margin-right: 7px;
    `

    export const ButtonText = styled.Text`
        color: white;
        font-size: 18px;
    `

    export const Button = styled(TouchableOpacity)`
       width: 56px;
       height: 56px; 
       border-radius: 5px;
       background-color: green;
       align-items: center;
       justify-content: center;
    `

    export const Form = styled.View`
        width: 100%;
        flex-direction: row;
        margin-top: 36px;
        margin-bottom: 42px;
    `
     
    export const ListEmptyText = styled.Text`
      color: white;
      font-size: 16px;
      text-align: center;
    `