import styled from 'styled-components';

export const Wapper = styled.div`
background: ${props => props.theme.secondary_bg};
height: 100vh;
position: relative;
`

export const SectionContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  width: 600px;
`

export const TodoList = styled.div`
  min-height: 550px;
  max-height: 550px;
  transition: all 0.5s ease-in-out;

  overflow-y: auto;
`