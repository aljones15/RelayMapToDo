import React from 'react';
import {IconStyle, ListStyle, ToDoStyle} from './style';
import ToDoList from '../ToDoList/index.jsx';
import {graphql, createFragmentContainer } from 'react-relay';

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
            onClick={this.toggleToDoList.bind(this)}>Close</div>
          <ToDoList city_id={this.props.item._id} list={[1,2,3,4,5]} />
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
        className='City' 
        style={this.toggleStyle()} 
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
