import React from 'react';
import {Button, ButtonContainer} from "../home/style";

class Result extends React.Component {

    state = { intervalId : '', value : 0, boyFriendWorth : Math.floor(Math.random() * 101)};

    componentDidMount() {
        const intervalId = setInterval(this.increment, 40);
        this.setState({intervalId});
    }

    increment = () => {
        this.setState({ value : this.state.value + 1})
    }

    reached = () => {
        clearInterval(this.state.intervalId);
        return this.state.boyFriendWorth;
    };

    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Your Boyfriend is worth</h1>

                <h1 style={{ fontSize : '10rem', margin : '0px'}}>
                {
                    this.state.value <= this.state.boyFriendWorth ?
                        this.state.value
                        :
                        this.reached()
                }
                </h1>
                <h1>Camels</h1>

                <div className="fb-share-button"
                     data-href="https://developers.facebook.com/docs/plugins/"
                     data-layout="button_count"
                     data-size="large">
                    <a target="_blank"
                       href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                       className="fb-xfbml-parse-ignore">
                    </a>
                </div>

                <ButtonContainer>
                    <Button to={'/'}>Calculate Again?</Button>
                </ButtonContainer>
            </div>
        )
    }
}
export default Result;
