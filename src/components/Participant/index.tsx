import { Container, Name, Button, ButtonText } from "./styles";

type Props = {
    name: String;
    onRemove: () => void;
}

export function Participant({name, onRemove}: Props){
    return (
        <Container>
            <Name>
                {name}
            </Name>
            <Button onPress={onRemove}>
                    <ButtonText>
                        -
                    </ButtonText>
            </Button>
        </Container>
    )
}