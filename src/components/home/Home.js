import React from 'react';
import Range from "../commons/Range";
import DropDown from "../commons/DropDown";
import Selection from "../commons/Selection";
import beardNone from '../../images/beard-none.png';
import beardSmall from '../../images/beard-small.png';
import beardMiddle from '../../images/beard-middle.png';
import beardFull from '../../images/beard-full.png';
import body1 from '../../images/body-1.png';
import body2 from '../../images/body-2.png';
import body3 from '../../images/body-3.png';
import {Button, ButtonContainer} from "./style";

const options = ['blonde', 'brown', 'black', 'red', 'grey'];
const hairLength = ['long', 'middle', 'short', 'bald'];
const beardTypes = [beardNone, beardSmall, beardMiddle, beardFull];
const bodyTypes = [body1, body2, body3];

const inputRadioStyle = {width : 0, height : 0, display: 'none'};
const labelStyleForBeard = {display : 'inline-block', padding: '0px 5%'};
const labelStyleForBody = {display : 'flex', justifyContent: 'center', width: '150px', padding: '5% 0%',marginLeft: '20%'};

const Home = () =>
   <div>
     <Range defaultValue={25} step={1} min={14} max={70} name={'Age'} />

     <Range defaultValue={173} step={1} min={140} max={220} name={'Height (cm)'} />

     <DropDown  name={'Haircolor'} options={options}/>

     <Selection  type="text" style={inputRadioStyle} options={hairLength} name={'Hairlength'} />
     <Selection  type="image" style={inputRadioStyle} labelStyle={labelStyleForBeard} options={beardTypes} name={'Beard'} />
     <Selection  type="image" style={inputRadioStyle} labelStyle={labelStyleForBody} options={bodyTypes} name={'Body'} />


      <ButtonContainer>
          <Button to={'/result'}>Calculate </Button>
      </ButtonContainer>
   </div>;

export default Home;
