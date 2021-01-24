import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: '#333333',
        paddingTop: Platform.OS === 'android' ? 30 : 0
    },
    
});