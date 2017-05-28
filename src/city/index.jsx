import React from 'react';
import {IconStyle, ListStyle, ToDoStyle} from './style';
import ToDoList from '../todoList/index.jsx';
import { graphql, createFragmentContainer } from 'react-relay';

export class City extends React.Component{
  constructor(props){
    console.log('city called');
    super(props);
    this.state = {open: false};
  }
  fetchToDos(_){
    console.log('fetch to dos called');
    this.setState((pstate, props) => { return {open: !pstate.open} });
  }
  toggleStyle(){
    if(this.state.open){
      return ListStyle;
    } else {
      return IconStyle;
    }
  }
  toggle(){
    if(this.state.open){ 
      return(
	<div className='ToDoList' style={ToDoStyle.container}>
	  <div className='ToDoListClose' 
            style={ToDoStyle.closeBar} 
            onClick={this.fetchToDos.bind(this)}>Close</div>
          <ToDoList list={[1,2,3,4,5]} />
	</div>
      );
    } else {
      return(
        <img src='img/list/list-flat.svg' 
          onError={() => this.src='img/list/32x32.png'} 
          onClick={this.fetchToDos.bind(this)}/>
      );
    }
  }
  render(){
    return(
      <div className='City' style={this.toggleStyle()} >
      {
        this.toggle()
      }  
      </div>   
    ); 
   }
}

const cityFrag = createFragmentContainer(City, {
  item: graphql`
    fragment city_item on City {
      _id
      lat
      lng
    }
  `,
});

export default cityFrag;
