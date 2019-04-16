import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderContainer = styled.div`
   display : flex;
   justify-content : center;
   align-items: center;
   padding : 10px 0px;
   border-bottom : 1px solid #EDEDED;
   box-sizing: border-box;
   font-size: 1.5em;
`;

export const LinkToHome = styled(Link)`
   text-decoration : none;
   color : #000;
`;
