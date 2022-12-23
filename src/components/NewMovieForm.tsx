import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const NewMovieForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <View style={styles.button}>
        <View style={{width: 100, marginLeft: 20}}>
          <Button title="Add" onPress={() => onSubmit(title, content)} />
        </View>
        <View style={{marginLeft: 25, width: 100}}>
          <Button
            title="Reset"
            onPress={() => {
              setTitle('');
              setContent('');
            }}
          />
        </View>
      </View>
    </View>
  );
};

NewMovieForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
    color: 'black',
    width: 300,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
    color: 'black',
  },
  container: {
    marginTop: 30,
    marginLeft: 30,
    alignItems: 'flex-start'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 100,
    width: 100,
  },
});

export default NewMovieForm;
