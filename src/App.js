import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      colors: []
    }
    this.onAddColor = this.onAddColor.bind(this)
  }

  onAddColor(title, value){
    this.setState({colors: [...this.state.colors, {title, value}]});
  }

  render (){
    const {colors} = this.state;
    return (
      <div className="app"> 
        <AddColorForm onNewColor={onAddColor} />
        <ColorList colors={colors} />
      </div>
    )
  }
}

export default App