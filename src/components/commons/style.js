import styled from "styled-components";

export const Container = styled.div`
   font-size: 2em;
   padding: 2% 0%;
   width : 80%;
   margin : auto;
   border-bottom : 1px solid #EDEDED;
   display: flex;
   align-items: center;
`;

export const RangeInputValueContainer = styled.span`
    display: inline-block;
    margin-left: 10%;
    width: 70%;
`;

export const SelectContainer = styled.span`
    margin-left: 27%;
    width: 100%;
`;

export const RangeInput = styled.input`
  width : 84%;
  margin-left: 5%;
`;
export const Input = styled.input`
  margin-left: 5%;
`;

export const RangeValue = styled.div`
    width : 10%;
    display : inline-block;
`;

export const NameContainer = styled.span`
    width : 20%;
    display : inline-block;
`;

export const Select = styled.select`
       width: 100%;
`;

export const Label = styled.label`
  background-color :  ${props => props.checkedValue == props.value ? '#e8972c' : '#fff'};
  padding : 0px 7%;
  
`;

export const Image = styled.img`
   width: 90px;
  &:hover {
    transform : scale(1.1);
  }
`;


export const HairSelection = styled.span`
  display : 'inline-block';
`;

export const SelectionContainer = styled.span`
    display: flex;
    justify-content: space-around;
    margin-left: 17%;
    width: 60%;
`;


