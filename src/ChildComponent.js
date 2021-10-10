import React from 'react';
import ReactDOM from 'react-dom';


class ChildComponent extends React.Component {
    state = {
      childVar: '',
    }
    
    handleSelectLanguageChange = () => {
        var data = this.inputlanguage.value;
        this.setState({childVar: `${data}`})
        this.props.sendData(data);
        console.log("handleSelectLanguageChange: " + data);
    }

    render(){
        return(
            <div className="childComponent">
               <h3>ChildComponent </h3>
               <label>Data passed to Parent  </label>
               <input className="dataPassed" ref={(ref) => this.inputlanguage = ref } 
               type="text" onChange={this.handleSelectLanguageChange}></input>
            </div>
        );
    }
}

export default ChildComponent;