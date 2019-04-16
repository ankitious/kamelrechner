import React from 'react';
import {
    Container,
    HairSelection, Image, Input,
    Label,
    NameContainer,
    SelectionContainer,
} from "./style";

class Selection extends React.Component {
    state = { checkedValue : 0};

    onSelection = (e) => {
        this.setState({checkedValue : e.target.value});
    };
    render() {
        const {name, options, style, type, labelStyle} = this.props;
        const {checkedValue} = this.state;
        return (
            <Container>
                <NameContainer>{name}</NameContainer>
                <SelectionContainer>
                    {
                        options.map((h,i) =>
                            <HairSelection key={i}>
                                <Input
                                    type="radio"
                                    name={name}
                                    style={style}
                                    value={i}
                                    id={h}
                                    onChange={this.onSelection}
                                />

                                {
                                    type === 'text' ?
                                        <Label
                                            checkedValue={checkedValue}
                                            value={i}
                                            htmlFor={h}>
                                            {h}
                                        </Label> :
                                        <Label
                                            style={labelStyle}
                                            checkedValue={checkedValue}
                                            value={i}
                                            htmlFor={h}>
                                            <Image src={h} alt={name}/>
                                        </Label>
                                }

                            </HairSelection>
                        )}
                </SelectionContainer>
            </Container>
        )
    }
}
export default Selection;
