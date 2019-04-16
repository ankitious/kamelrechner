import React from 'react';
import {Button, ButtonContainer} from "../home/style";
import {ShareOnFacebook} from "./style";

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

    sharePopUp = () => {
        console.log('Hey');
        window.open('https://www.facebook.com/sharer.php?u=https://naughty-bose-5b85ef.netlify.com/', '_blank', 'width=300,height=250')
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


                    <ShareOnFacebook className="fb_button" target="_blank" href="javascript:void(0);" onClick={this.sharePopUp}>Post
                        on facebook</ShareOnFacebook>


                <ButtonContainer>
                    <Button to={'/'}>Calculate Again?</Button>
                </ButtonContainer>
            </div>
        )
    }
}
export default Result;
