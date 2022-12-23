import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/MovieContext';
import NewMovieForm from '../components/NewMovieForm';

const AddScreen = ({ navigation }) => {
  const {addMovie} = useContext(Context);

  return (
    <NewMovieForm
      onSubmit={(title, content) => {
        addMovie(title, content, () => navigation.navigate('Home'));
      }}
    />
  );
};

AddScreen.navigationOptions = {
  title: 'Add Movies',
  headerTitleStyle: {
    alignItem: 'center',
    justifyContent: 'center',
  },
};

export default AddScreen;
