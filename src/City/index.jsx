import React from 'react';
import { style } from './style';
import ToDoList from '../ToDoList/index.jsx';
import {graphql, createFragmentContainer } from 'react-relay';
import { css } from 'aphrodite';

class CityView extends React.Component{
  constructor(props){
    super(props);
    this.state = {open: false};
  }
  toggleToDoList(_){
    this.setState((pstate, props) => { return {open: !pstate.open} });
  }
  toggleStyle(){
    if(this.state.open){
      return css(style.List) + " City";
    } else {
      return css(style.Icon) + " City";
    }
  }
  toggle(){
    if(this.state.open){ 
      return(
	<div className={css(style.container) + ' ToDoList'}>
	  <div className={css(style.CloseBar) + ' ToDoListClose'}
            onClick={this.toggleToDoList.bind(this)}>Close</div>
          <ToDoList city_id={this.props.item._id} relay={this.props.relay} />
	</div>
      );
    } else {
      return(
        <img src='img/list/list-flat.svg' 
          onError={() => this.src='img/list/32x32.png'} 
          onClick={this.toggleToDoList.bind(this)}/>
      );
    }
  }
  render(){
    return(
      <div 
        className={this.toggleStyle()} 
      >
      {
        this.toggle()
      }  
      </div>   
    ); 
   }
}

const City = createFragmentContainer(
  CityView,
  graphql`
    fragment City_item on City {
      _id 
    }
  `,
);

export default City;
