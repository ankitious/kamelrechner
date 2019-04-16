import React from 'react';
import {Container, NameContainer, RangeContainer, RangeInput, RangeInputValueContainer, RangeValue} from "./style";

class Range extends React.Component {
    state = { value : 0 };

    componentDidMount() {
        const {defaultValue} = this.props;
        this.setState({ value : defaultValue});
    }

    onRangeChange = (e) => {
      this.setState({ value : e.target.value })
    };

    render() {
        const {defaultValue, min, max, step, name} = this.props;
        const { value } = this.state;
        return (
            <Container>
                <NameContainer>{name}</NameContainer>
                <RangeInputValueContainer>
                    <RangeValue>{value}</RangeValue>
                    <RangeInput
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        name={name}
                        defaultValue={defaultValue}
                        onChange={this.onRangeChange}
                    />
                </RangeInputValueContainer>
            </Container>
        )
    }
}
export default Range;
