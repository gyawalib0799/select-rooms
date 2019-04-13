import Rooms from '../components/Rooms';
import Layout from '../components/Layout';
import React from 'react';

//const Index=()=>(
class Index extends React.Component {
  state={
    rooms: [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
    ]
  };

  handleChange(e){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;   
    console.log(value);
    console.log(target);
    
  }
  
    render(){
        return(
    <Layout>
 <div>
   {this.state.rooms.map((room, key)=>(
     <layout>
      <header>Room {room.id} &nbsp;&nbsp;
      <input type ="checkbox" 
      onChange={this.handleChange}></input></header>
     <Rooms 
     id={room.id}
     />        
     </layout>
   ))}    
    </div>     
 <button type="button" className="btn btn-primary btn-sm">Submit</button>    
 </Layout>
 )
 }
}
 
export default Index;