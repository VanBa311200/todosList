import styled from 'styled-components';

export const Task = styled.div`
display: flex;
justify-content: space-between;
padding: 7px 14px;
background-color: ${props => props.isComplete ? props.theme.checked_task_bg : props.theme.primary_bg};
margin: 0 0 15px 0;
border-radius: 15px;
transition: all 0.4s ease-in-out;
&:hover {
	background-color: ${props => props.theme.todo_hover};
	box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 20px;
}
`

export const Left = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const Right = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const IconCheck = styled.div`
width: 28px;
height: 28px;
border: none;
outline: none;
border-radius: 50%;
background-color: #90a2aa;
cursor: pointer;
`

export const TitleTodo = styled.p`
 text-decoration: ${(props) => props.isComplete ? "line-through" : ""};
 color:${(props) => props.theme.textcolor};
 margin-left: 10px;
`

export const IconDelete = styled.i`
font-size: 28px;
color: ${(props) => props.theme.sub_icon_color};
cursor: pointer;
display: flex;
justify-content: center;
transition: all 0.5s ease-in-out;
`

export const WapperIcon = styled.div`
padding: 7px;
transition: all 0.3s ease;
border-radius: 5px;
&:hover {
	border-radius: 5px;
	background-color: ${(props) => props.theme.modal_input_bg};
}

&:hover ${IconDelete} {
  color: ${(props) => props.theme.sub_icon_color_hover} !important;
}
`

