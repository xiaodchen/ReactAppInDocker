import React, { Component } from 'react';

export default class App extends Component {
  constructor(props){
	  super(props);

	  this.state = {
	    imageUrl: 'https://dl.dropboxusercontent.com/s/38pwoyygf2art8v/var1.png', 
	    colorName: 'Verdant',
	    activeClass: 1,
	    buttonText: '$100'
	  };
	};

	changeColor = (id) => {
		if (id === 1) {
			this.setState({
				imageUrl: 'https://dl.dropboxusercontent.com/s/38pwoyygf2art8v/var1.png', 
				colorName: 'Verdant',
				activeClass: id
			});

		} else if (id === 2) {
			this.setState({
				imageUrl: 'https://dl.dropboxusercontent.com/s/w1ihqb5hadv228g/var2.png', 
				colorName : 'Lavender',
				activeClass: id
			});
		}
	};

  render() {
    return (
    	<div>
		    <div className="content">
		      <div className="scale-container"><img id="image" src={this.state.imageUrl} alt=""/></div>
		      <div className="toggle">
		        <div onClick = { () => this.changeColor(1) } className = "variable activeClass === 1 ?variable-active : null" id="var1"></div>
		        <div onClick = { () => this.changeColor(2) } className = "variable activeClass === 2 ? variable-active : null" id="var2"></div>
		        <div id="variable-title">{this.state.colorName}</div>
		      </div>
		      <div className="description">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the value.</div>
		    </div>
		    <div className="add-button" onMouseOver = { () => this.setState({buttonText: 'Add to Bag'}) } onMouseOut = { () => this.setState({buttonText: '$100'}) }>{this.state.buttonText}</div>
		  </div>
    );
  }
}
