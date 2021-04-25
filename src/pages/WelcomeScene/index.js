import React, { useEffect, useState } from "react";
import GenericButton from "../../components/GenericButton";
import GenericInput from "../../components/GenericInput";
import WelcomeSceneProvider, { useWelcomeSceneContext } from "../../contexts/WelcomeSceneContext";
import { Form } from "./styles";
import { FullScreen } from "../../styles/gridstyle";
import { Title } from "../../styles/fontstyle";

const Page = () => {
  const [disabledButton, setDisabledButton] = useState(true);

  const { 
    username, 
    setUsername, 
    handleConfirmName, 
    confirmedUsername, 
    history
  } = useWelcomeSceneContext();

  const handleInput = ({ target }) => {
    setUsername(target.value);
    target.value ? setDisabledButton(false) : setDisabledButton(true);
  };

  const handleBtnConfirmClick = () => {
    handleConfirmName();
    setDisabledButton(true);
    setTimeout(() => history.push("/cart"), 2000);
  };

  useEffect(() => {
    if (confirmedUsername) {
      setTimeout(() => history.push("/cart"), 2000);
    }
  }, [confirmedUsername, history]);

  return (
    <FullScreen>
      <Title>
        {!confirmedUsername ? 
        `Olá, qual é o seu nome?` : 
        `Bem Vindo ${confirmedUsername}!`}
      </Title>
      {!confirmedUsername && (
        <Form>
          <br />
          <GenericInput
            name="nametester"
            placeholder="Digite aqui o seu nome"
            onChange={handleInput}
            value={username}
          />
          <br />
          <GenericButton
            text="Confirmar"
            action={handleBtnConfirmClick}
            disabled={disabledButton}
            block
          />
        </Form>
      )}
    </FullScreen>
  );
};

const WelcomeScene = () => (
  <WelcomeSceneProvider>
    <Page />
  </WelcomeSceneProvider>
);

export default WelcomeScene;
