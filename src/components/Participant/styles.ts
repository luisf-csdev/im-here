import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#1F1E25',
        marginBottom: 10
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    }
})