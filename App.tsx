import { Text, View, StyleSheet } from 'react-native'

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    heading: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    date: {
      color: '#6B6B6B',
      fontSize: 16
    }
  })

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
