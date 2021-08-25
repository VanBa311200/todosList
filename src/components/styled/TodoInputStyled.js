import styled from 'styled-components';

export const TodoForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const InputTodo = styled.input` 
  min-width: 350px;
  padding: 18px 80px 18px 20px;
  background-color: ${props => props.theme.modal_input_bg};
  outline: none;
  border: none;
  border-radius: 15px;
  color: ${props => props.theme.sub_text_color};
  transition: all 0.4s ease;
`

export const ButtonCreate = styled.button`
  border: none;
  outline: none;
  background-color: ${props => props.theme.secondary_bg};
  border-radius: 13px;
  padding: 13px 15px;
  cursor: pointer;
  color: ${props => props.theme.sub_text_color};
  position: absolute;
  margin-right: 5px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(35, 33, 39, 0.7);
  } 
`

export const WapperInput = styled.div`
  position: relative;
  transition: all 0.4s ease;
  background-color: transparent;
  border-radius: 15px;

  &:focus-within {
    transform: scale(1.1);
	  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 20px;
  }
`