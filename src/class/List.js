import React from "react";
import MuiscForm from "./MusicForm";

class List extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      music: [
        {artist: "Justin Timberlake" , price: 2.99},
        {artist: "Dua Lipa", price: 8.99}
      ],
      showForm: true
    };
  }
  addMusic = (music) => {
    let updateMusic =[music, ...this.state.music]
    this.setState({
      music:updateMusic
    })
  }
  deleteMusic = (musicName) => {
    let filteredMusic = this.state.music.filter(m => m.artist !== musicName)
    this.setState({
    music:filteredMusic
    })
  }
  
  renderMusic = () => {
    return this.state.music.map((m) => {
      return (
        <div className="border">
          <h1>{m.song}</h1>
          <h1>{m.artist}</h1>
          <h1>{m.price}</h1>
          <button onClick={()=>this.deleteMusic(m.artist)} >Delete</button>
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
             <button onClick={this.toggleForm}>
              <span>{this.state.showForm ? 'Hide Artist Form' : 'Create an artist'}</span>
              <div className="liquid" ></div>
            </button>
          {this.state.showForm && <MuiscForm addMusic={this.addMusic}/>}
          </div>
        
      
           <div>
              <h1 className="heading" >List of Music</h1>
              {this.renderMusic()}
          </div>
        
      </div>
        )
  
  }
}
 
export default List;
