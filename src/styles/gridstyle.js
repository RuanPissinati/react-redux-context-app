import styled from 'styled-components';

export const FullScreen = styled.div`
  display: flex;
  width: 100%;
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1080px;
  min-height: 30px;
  margin: 0 auto;
  flex-direction: column;
  /* border: 1px solid red; */
`;

export const ContainerFull = styled(Container)`
  max-width: 100%;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid blue; */
`;
