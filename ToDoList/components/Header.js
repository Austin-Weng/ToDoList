import { StyleSheet, Text, View } from 'react-native';

export default function Header({ component }) {
    return (
       <Text> {component} </Text>
    )
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: '#D8C0E4',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      fontSize: '40px',
    },
  });