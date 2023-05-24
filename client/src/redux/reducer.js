const { GET_USERS, ADD_USER, DELETE_USER, EDIT_USER } = require("./axctionTypes");

const init = {
  loading: true,
  users: null,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: payload,
      };

    case ADD_USER:
      return {
        ...state,
        loading: false,
        users: [...state.users, payload],
      };
      case DELETE_USER : 
      return {
          ...state,loading:false,users:state.users.filter(el=>el._id!==payload)
      };
 case EDIT_USER:
  return {
    ...state,
    users: state.users.map((el) => (el._id === payload._id ? payload : el)),
  };
    default:
      return state;
  }
};

export default reducer;
