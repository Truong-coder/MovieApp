import createDataContext from './createDataContext';

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'add_movie':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete_movie':
      return state.filter(movie => movie.id !== action.payload);
    default:
      return state;
  }
};

const addMovie = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'add_movie', payload: {title, content}});
    if (callback) {
      callback();
    }
  };
};

const deleteMovie = dispatch => {
  return id => {
    dispatch({type: 'delete_movie', payload: id});
  };
};

export const {Context, Provider} = createDataContext(
  movieReducer,
  {addMovie, deleteMovie},
  [],
);
