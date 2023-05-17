import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Name of the event
            </Text>
            <Text style={styles.eventDate}>
                Monday, May 4th, 2023
            </Text>
            <TextInput placeholder='Participant name'
                placeholderTextColor={'#6B6D6B'}
                style={styles.input} />
        </View>
    )
}