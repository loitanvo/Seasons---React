import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'


class App extends React.Component{
    state = { lat: null, errorMessage: '' };

    //did mount method 
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message})
        )
    }


    render() {
     if (this.state.errorMessage && !this.state.lat) {
        return <div> error: {this.state.errorMessage}</div>
     }
    
     if (!this.state.errorMessage && this.state.lat){
         return <SeasonDisplay lat={this.state.lat} />
     }
     return <div>loading</div>
    }

};




ReactDOM.render(<App />, document.querySelector('#root'));




