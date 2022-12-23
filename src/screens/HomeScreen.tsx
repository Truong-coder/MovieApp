import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  Button,
} from 'react-native';
import { Header } from 'react-navigation-stack';
import { Context } from '../context/MovieContext';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
interface IToDo {
  state: any;
  title: string;
  id: number;
  content: string;
}

const HomeScreen = ({ navigation }) => {
  const { state, deleteMovie } = useContext<IToDo[]>(Context);
  //Delete Modal
  const [visible, setVisible] = React.useState<boolean>(false);
  const handleModal = (): void => {
    setVisible(!visible);
  };
  console.log('Is This modal visible?', visible);
  console.log('State: ', state);
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={movie => movie.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              {/* <Image source={require('../blank.png')} /> */}
              <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  borderColor: 'black',
                  borderWidth: 1,
                  height: 100,
                  width: 75,
                  tintColor: 'white',
                }}
                source={{
                  uri: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg',
                }}
              />

              <View style={styles.show}>
                <Text style={styles.title}>Name: {item.title}</Text>
                <Text style={styles.desTitle}>Description: {item.content}</Text>
              </View>

              {/* <DeleteModal /> */}

              <TouchableOpacity onPress={handleModal} style={{marginTop: 80}}>
                <Icon name="close-circle-outline" size={30} color="black" />
              </TouchableOpacity>

              <Modal
                transparent={true}
                animationType={'fade'}
                isVisible={visible}>
                <View style={styles.ModalContainer}>
                  <Text style={styles.modalHeader}> Delete Pop-up </Text>
                  <Text style={styles.BottomBorder}>  </Text>
                  <Text style={styles.text}>
                    Do you want to delete "{item.title}" ?
                  </Text>
                  <View style={styles.button}>
                    <View style={{ width: 100 }}>
                      <Button
                        title="YES"
                        onPress={() => {
                          deleteMovie(item.id);
                          handleModal();
                        }}
                        style={styles.appButtonContainer}
                      />
                    </View>
                    <View style={{ marginLeft: 30, width: 100 }}>
                      <Button title="No" onPress={handleModal} />
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          );
        }}
      />
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Add')}>
        <Icon name="add-circle-outline" size={30} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
    color: 'black',
    width: 200,
    Top: 0,
  },
  desTitle: {
    fontSize: 18,
    color: 'black',
    width: 200,
    marginTop: 50,
  },
  icon: {
    fontSize: 24,
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  show: {
    flexDirection: 'column',
  },
  appButtonContainer: {
    elevation: 8,

    borderRadius: 10,
    padding: 10,
    color: 'blue',
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  container: {
    flex: 1,
    // alignItems: 'flex-start',
    justifyContent: 'center',

    width: 400,
  },
  modal: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 40,
    width: '100%',
    position: 'absolute',
    bottom: 0,

  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 100,
  },
  modalHeader: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 120,
    marginRight: 100,
    fontWeight: 'bold',
    width: 200,
    bottom: 0,
  },
  ModalContainer: {
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
  },
  BottomBorder: {
    borderBottomWidth: 1,
    width: 355,
  }
});

export default HomeScreen;
