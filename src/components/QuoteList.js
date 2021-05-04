import {Component} from 'react';
import axios from 'axios';
import AddQuote from './AddQuote'
import Quote from './Quote'

class QuoteList extends Component{
  constructor(){
    super()
    this.state = {
      quotesArray: []

    }
  }

  componentDidMount(){
    axios.get('/api/office').then((res) => { this.setState({quotesArray: res.data})}).catch((err) => { console.log(err)})
  }

  deleteQuote = (id) => {
    console.log(id)
    axios.delete(`/api/office/${id}`)
    .then((res) => {
      this.setState({quotesArray: res.data})
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  addQuote = (content, character, image) => {
    axios.post('/api/office', {content, character, image}).then((res) => {
      this.setState({quotesArray: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }



  editQuote = (id, content) => {
    console.log(id, content)
    axios.put(`/api/office/${id}`, {content})
    .then((res) => {
      this.setState({quotesArray: res.data})
    })
    .catch((err) => { console.log(err)
  })
}


  render(){
    return(
      <div className="add">
        
        {this.state.quotesArray.map((quote) => {
          return(
            <Quote 
            quote={quote} 
            deleteQuote= {this.deleteQuote} editQuote={this.editQuote}/>
          )
        })}
        <AddQuote addQuote={this.addQuote} />
      </div>
    )
  }
} 

export default QuoteList