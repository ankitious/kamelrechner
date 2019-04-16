import styled from "styled-components";
import {Link} from "react-router-dom";
export const ButtonContainer = styled.div`
  margin : auto;
  display : flex;
  justify-content: center;
  padding : 2% 0%;
  width : 80%;
  border-bottom : 1px solid #EDEDED;
`;
export const Button = styled(Link)`
    color: #FFF;
    text-decoration : none;
    display: inline-block;
     margin : auto;
    background-color: #e8972c;
    border-color: #e8972c;
    width: auto;
    padding: 0.5% 2%;
    border-radius: 5px;
    line-height: 48px;
    height: 48px;
    font-size: 1.5rem;
`;
