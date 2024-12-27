import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput(input.slice(0, -1));
  };
  const handleAllClear = () => {
    setInput('');
    setOutput('');
  };
  const handleEvaluate = () => {
    try {
      let result = eval(input).toString();
      if (result.includes('.') && result.length > 4) {
        result = parseFloat(result).toFixed(4);
      }
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  return (
    <LinearGradient colors={['#4facfe', '#00f2fe']} style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.output}>{output}</Text>
      </View>
      <View style={styles.buttons}>
        {[
          ['AC', handleAllClear, '#ff5959'],
          ['C', handleClear, '#ffb347'],
          ['%', () => handlePress('%'), '#00d4ff'],
          ['÷', () => handlePress('/'), '#00d4ff'],
          ['7', () => handlePress('7'), '#ffffff'],
          ['8', () => handlePress('8'), '#ffffff'],
          ['9', () => handlePress('9'), '#ffffff'],
          ['x', () => handlePress('*'), '#00d4ff'],
          ['4', () => handlePress('4'), '#ffffff'],
          ['5', () => handlePress('5'), '#ffffff'],
          ['6', () => handlePress('6'), '#ffffff'],
          ['-', () => handlePress('-'), '#00d4ff'],
          ['1', () => handlePress('1'), '#ffffff'],
          ['2', () => handlePress('2'), '#ffffff'],
          ['3', () => handlePress('3'), '#ffffff'],
          ['+', () => handlePress('+'), '#00d4ff'],
          ['00', () => handlePress('00'), '#ffffff'],
          ['0', () => handlePress('0'), '#ffffff'],
          ['.', () => handlePress('.'), '#ffffff'],
          ['=', handleEvaluate, '#28a745'],
        ].map(([title, onPress, color], index) => (
          <Button key={index} title={title} onPress={onPress} color={color} />
        ))}
      </View>
      <Text style={styles.footer}>Calc by Chandan Kumar</Text>
    </LinearGradient>
  );
};

const Button = ({ title, onPress, color }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: color }]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, title === '=' && { color: '#fff' }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  screen: {
    width: '90%',
    alignItems: 'flex-end',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    fontSize: 40,
    color: '#000',
    marginBottom: 10,
  },
  output: {
    fontSize: 30,
    color: '#888',
  },
  buttons: {
    width: '90%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
