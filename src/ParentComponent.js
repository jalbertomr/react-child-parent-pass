import React from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from './ChildComponent';
import "./css/styles.css";

class ParentComponent extends React.Component {
    state = { parentVar: '', 
              parentVar2: '',
              parentInputVar: ''};
    
    getData = (val) => {
        this.setState({parentVar: `${val}`});
        console.log("ParentComponent state: " + this.state );
        console.log("ParentComponet-ChildComponent " + val);
    }

    getData2 = (val) => {
        console.log("ParentComponent getData2 val: " + val);
        this.setState({parentVar2: `${val}`});
        console.log("ParentComponent getData2: " + `${this.state.parentVar2}`);
    }

    handleChange = () => {
        var value = this.inputData.value;
        this.setState({parentInputVar: `${value}`});
        console.log("handleInput: " + value);
    }

    render(){
        return(
            <div className="parentComponent">
               <h3 className="divTitle">ParentComponent</h3>
               
               <label className="labelfield">this.state.parentVar:</label>
               <label className="dataPassed labelData opacity">{this.state.parentVar} </label>
               
               <label className="labelfield">this.state.parentVar2:</label>
               <label className="Level2 dataPassed labelData opacity">{this.state.parentVar2} </label>
               
               <label className="labelfield">this.state.parentInputVar:</label>
               <label className='dataPassedfromParent labelData'>{this.state.parentInputVar} </label>
               
               <label className="labelfield">parentVar2: </label>
               <input className="parentInput inputField labelData" type='text' placeholder='type any value'
                  ref={(ref) => this.inputData = ref}
                  onChange={this.handleChange}/>
               <ChildComponent toReturnData={this.getData} toReturnData2={this.getData2}
               dataToPass={this.state.parentInputVar}/>
               <br/>
            </div>
        );
    }
}

export default ParentComponent;