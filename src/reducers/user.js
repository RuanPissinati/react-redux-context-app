const INITIAL_STATE = {
  token: '',
  username: sessionStorage.getItem('USER_NAME') || '',
}

export default function user(state = INITIAL_STATE, action){
  switch (action.type) {
    case "SAVE_USER_NAME":
      if(action.savelocal){
        sessionStorage.setItem('USER_NAME', action.username);
      }
      return {...state, username: action.username }
    default:
      return state;
  }
};
