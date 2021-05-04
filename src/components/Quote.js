import { Component } from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';



class Quote extends Component {
  constructor() {
    super ()
    this.state = {
      editMode: false,
      content: ''
    
    }
  }
  handleContent = (value) => {
    this.setState({content: value})
  }

  toggleEdit = () => {
    this.setState({editMode: !this.state.editMode})
  }

  handleSave = () => {
    this.props.editQuote(this.props.quote.id, this.state.content)
    this.toggleEdit()
    this.setState({content: ''})
  }

  render(){
    return this.state.editMode ?(
      <div>
        <input value={this.state.content} onChange={(e) => this.handleContent(e.target.value)} 
      />
      <Button onClick={this.handleSave}>Save</Button>
      </div>
    ): (
      <div className="main">
        <p>{this.props.quote.content}</p>
        
        <img id="pics" src={this.props.quote.image} alt={this.props.quote.character} />
        <p> -{this.props.quote.character}</p>
        <br></br>
      
        <Button onClick={() => this.props.deleteQuote(this.props.quote.id)}> 
        <DeleteIcon/>Delete
        </Button> 
        <Button onClick={() => this.toggleEdit()}> Edit </Button>
      </div>

    )
  }
}
export default Quote