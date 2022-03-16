import React from "react";
import MuiscForm from "./MusicForm";

class List extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      music: [
        {artist: 'Justin Timberlake',price: 2.99},
        {artist: 'Dua Lipa',price: 8.99}

      
      ],showForm: true
    };
  }
  
  renderMusic = () => {
    return this.state.music.map(m => {
      return (
        <div className="border">
          <h1>{m.name}</h1>
          <h2>{m.artist}</h2>
           <p>{m.price}</p>
        </div>
)
    })
  }
  toggleForm =()=> {
    this.setState({
  showForm: !this.state.showForm
    
    })
  }
  
  // define render 
  render() {
    
    return (
      <div className="border" >
        <div>
        <button onClick={this.toggleForm}><span>{this.state.showForm ? 'Hide Artist Form' : 'Create an artist'}</span><div className="liquid"></div> </button>
         {this.state.showForm &&  <MuiscForm/>}
        </div>
        
      
        
        <h1 className="heading" >List of Music</h1>
        {this.renderMusic()}

</div>
        )
  
  }
}
 
export default List
