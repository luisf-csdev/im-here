import { View, Text } from 'react-native'
import { styles } from './styles'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Name of the event
            </Text>
            <Text style={styles.date}>
                Monday, May 4th, 2023
            </Text>
        </View>
    )
}