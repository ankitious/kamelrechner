import React from 'react';
import {
    Container,
    NameContainer, Select,
    SelectContainer
} from "./style";

class DropDown extends React.Component {
    render() {
        const { name, options} = this.props;
        return (
            <Container>
                <NameContainer>{name}</NameContainer>
                <SelectContainer>
                    <Select>
                        { options.length > 0
                             &&
                            options.map(o =>
                                <option key={o}>{o}</option>
                        )}
                    </Select>
                </SelectContainer>
            </Container>
        )
    }
}
export default DropDown;
