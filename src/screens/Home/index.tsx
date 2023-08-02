import React, { useState } from 'react';
import { FlatList, Alert} from 'react-native';
import { Container, EventName, EventLocal, Input,ButtonText, Button, Form, ListEmptyText } from './styles';
import { Participant } from '../../components/Participant';

export default function Home(){
    const [Rachas, setRachas] = useState([]);
    const [nomeRacha, setNomeRacha] = useState('');
    
    function handleParticipantAdd(){
        if(nomeRacha.trim().length === 0){
            return Alert.alert('Erro', 'Você não definiu um nome.');
        }
        if(Rachas.includes(nomeRacha)){
            return Alert.alert('Mesmo Nome', 'Já marcaram um racha com esse nome, para não criar confusão tente outro nome.');
        }   
        setRachas(prevState => [...prevState, nomeRacha]);
        setNomeRacha('');
    }
  
    function handleParticipantRemove(name: string){
        Alert.alert('Desmarcar', 'Tem certeza que deseja Desmarcar ?', [
            {
                text: 'Sim',
                onPress: () => setRachas(prevState => prevState.filter(Rachas => Rachas !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }
    return(
    <Container>
        <EventName>
            Racha dos professores.
        </EventName>
        <EventLocal>
            UFC - Campus de Quixadá.
        </EventLocal>
            <Form>
                <Input
                    placeholder='Crie aqui um novo racha'
                    onChangeText={setNomeRacha}
                    value = {nomeRacha}
                />
                <Button onPress={handleParticipantAdd}>
                    <ButtonText>
                        OK
                    </ButtonText>
                </Button>
            </Form>
            <FlatList
                data = {Rachas}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant
                    key = {item} 
                    name = {item} 
                    onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator = {false}
                ListEmptyComponent={() => (
                    <ListEmptyText>
                        Ainda não há rachas cadastrados, marque um para começar a sua diversão.
                    </ListEmptyText>
                )}
            />
    </Container>
  );
}