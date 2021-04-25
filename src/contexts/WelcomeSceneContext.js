import React, { createContext, useContext, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/userActions";


const WelcomeSceneContext = createContext({});

const WelcomeSceneProvider = ({ children, confirmedUsername, saveUserName }) => {
  //Inputs
  const [username, setUsername] = useState("");
  
  // Navigation
  let history = useHistory();

  //On confirm button click
  const handleConfirmName = () => {
    saveUserName(username, true);
  };

  return (
    <WelcomeSceneContext.Provider
      value={{
        handleConfirmName,
        username,
        setUsername,
        confirmedUsername,
        history
      }}
    >
      {children}
    </WelcomeSceneContext.Provider>
  );
};

export const useWelcomeSceneContext = () => {
  const context = useContext(WelcomeSceneContext);
  const { 
    handleConfirmName, 
    username, 
    setUsername, 
    confirmedUsername,
    history 
  } = context;

  return {
    handleConfirmName,
    username,
    setUsername,
    confirmedUsername,
    history
  };
};

const mapStateToProps = (state) => ({
  confirmedUsername: state.user.username,
});

const mapStateToDispatch = (dispatch) => (bindActionCreators(userActions, dispatch));

export default connect(mapStateToProps, mapStateToDispatch)(WelcomeSceneProvider);
