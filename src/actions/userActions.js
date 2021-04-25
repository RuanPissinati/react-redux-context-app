export function saveUserName(username, savelocal){
  return {
    type: "SAVE_USER_NAME",
    username,
    savelocal
  }
}