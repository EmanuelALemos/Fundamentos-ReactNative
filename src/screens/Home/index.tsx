import React, { useState } from 'react';
import { Text, View , TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { isTemplateExpression } from 'typescript';

export default function Home(){
    const [Rachas, setRachas] = useState([]);
    const [nomeRacha, setNomeRacha] = useState('');
    
    function handleParticipantAdd(){
        if(nomeRacha === ''){
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
    <View style={styles.container}>
        <Text style={styles.eventName}>
            Racha dos professores.
        </Text>
        <Text style={styles.eventLocal}>
            UFC - Campus de Quixadá.
        </Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder='Crie aqui um novo racha'
                    onChangeText={setNomeRacha}
                    value = {nomeRacha}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        OK
                    </Text>
                </TouchableOpacity>
            </View>
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
                    <Text style = {styles.ListEmptyText}>
                        Ainda não há rachas cadastrados, marque um para começar a sua diversão.
                    </Text>
                )}
            />
    </View>
  );
}