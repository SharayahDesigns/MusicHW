import React from "react";

class MuiscForm extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      artist:'',
      song: '',
      price:'',
    }
  }
  
  handleChange=(e)=>{
    // console.log('value', e.target.value)
    console.log('name', e.target.name)
    
    this.setState({
      //the target.name is referred to the name= on line 52
    [e.target.name]:e.target.value
    
    })
    // console.log(e.target.value)
    // if(e.target.artist === 'artist') {
    //   this.setState({
    //   artist:e.target.value
    //   })
    // }
    // if(e.target.song === 'song') {
    //   this.setState({
    //   song:e.target.value
    //   })
    // }
    // if(e.target.price ==='price') {
    //   this.setState({
    //   price:e.target.value
    //   })
    // }
    
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit',this.state)
    this.props.addMusic(this.state)
  }
  
  render() {  
    return (

      <div className="box" >
        <form onSubmit={this.handleSubmit}>
          <h1>Music Form</h1>
          <h3>Artist:</h3>
          <input name='artist' value={this.state.artist} onChange={this.handleChange}/>
          <h3>Song:</h3>
          <input name="song" value={this.state.song} onChange={this.handleChange} />
          <h3>price:</h3>
          <input name="price" value={this.state.price} onChange={this.handleChange} />
          <br />
          <br/>
          <button  ><span>add</span><div className="liquid"></div> </button>
        </form>
       </div>
)
  }

}
export default MuiscForm
