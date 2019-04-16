import React from 'react';
import {
    HeaderContainer, LinkToHome,
} from "./style";

const Header = () =>
    <HeaderContainer>
        <LinkToHome
            style ={{margin: '12px 24px'}}
            to="/"
        >
            <h1>How many camels for your boyfriend?</h1>
        </LinkToHome>
    </HeaderContainer>;

export default Header;
