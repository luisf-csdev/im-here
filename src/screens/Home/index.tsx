import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function Home() {
    function handleParticipantAdd() {
        console.log("You've clicked to add a participant")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Name of the event
            </Text>

            <Text style={styles.eventDate}>
                Monday, May 4th, 2023
            </Text>

            <View style={styles.form}>
                <TextInput style={styles.input}
                    placeholder='Participant name'
                    placeholderTextColor={'#6B6D6B'} />

                <TouchableOpacity style={styles.button}
                    onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}