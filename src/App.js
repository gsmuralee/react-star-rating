import React, {Component} from 'react';
import AddColorForm from './AddColorForm';
import ColorList from './colorList';
import {v4} from 'uuid';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors: []
    }
    this.onAddColor = this.onAddColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.onRate = this.onRate.bind(this);
  }
  
  target(){
    return document.getElementById('react-container')
  }

  onAddColor(title, color){
    this.setState({colors: [...this.state.colors, {id:v4(), title, color, rating:0}]});
  }

  onRate(id, rating){
    const colors = this.state.colors.map(color =>  color.id !== id ? color : {...color, rating})
    this.setState({colors});
  }

  removeColor(id){
    const colors = this.state.colors.filter(color => color.id !== id )
    this.setState({colors});
  }

  render (){
    const {colors} = this.state;
    return (
      <div>
      <div className="app"> 
        <AddColorForm onNewColor={this.onAddColor} />
        <ColorList colors={colors} onRate={this.onRate} removeColor={this.removeColor}/>
      </div>
      </div>
    )
  }
}

export default App;