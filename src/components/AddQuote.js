import { Component } from 'react';
import Button from '@material-ui/core/Button';


class AddQuote extends Component{
  constructor(){
    super()
    this.state = {
      content: '',
      character: '',
      image: ''
    }
  }

  handleQuote = (value) => {
    this.setState({content: value})
  }
  
  handleCharacter = (value) => {
    this.setState({character: value})
  }

  handleImage = (value) => {
    this.setState({image: value})
  }

  handleAdd = () => {
    this.props.addQuote(
      this.state.content,
      this.state.character,
      this.state.image
    )
    this.setState({
      content: '',
      character: '',
      image: ''
    })
  }

  render(){
    return(
      <div>
      
        <input value={this.state.content}
         onChange={(e) => this.handleQuote(e.target.value)} 
         placeholder='Enter Quote'
         />
        <input 
        value={this.state.character} 
        onChange={(e) => this.handleCharacter(e.target.value)}
        placeholder= 'Enter Character'
         />
        <input 
        value={this.state.image} 
        onChange={(e) => this.handleImage(e.target.value)}
        placeholder="Enter image url" 
        />
        <Button 
        onClick={this.handleAdd}
        >
          Add Quote
        </Button>
      </div>
      
    )
  }
}
export default AddQuote