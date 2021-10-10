import React from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from './ChildComponent';
import "./css/styles.css";

class ParentComponent extends React.Component {
    state = { parentVar: ''}
       
    getData = (val) => {
        this.setState({parentVar: `${val}`});
        console.log("ParentComponent state: " );
        console.log("ParentComponet-ChildComponent " + val);
    }

    render(){
        return(
            <div className="parentComponent">
               <h3>ParentComponent</h3>
               <label><b> state.parentVar: </b></label>
               <label className="dataPassed">{this.state.parentVar} </label>
               <ChildComponent sendData={this.getData} />
               <br/>
            </div>
        );
    }
}

export default ParentComponent;