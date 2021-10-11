import React from 'react';
import ReactDOM from 'react-dom';
import ChildChildComponent from './ChildChildComponent';


class ChildComponent extends React.Component {
    state = {
      childVar: '',
      receiveDataChildChild: '',
    }
    
    handleChange = () => {
        var data = this.inputData.value;
        this.setState({childVar: `${data}`})
        this.props.toReturnData(data);
        console.log("childComponent handleChange: " + data);
    }

    getDataChildChild = (val) => {
        this.setState({receiveDataChildChild: `${val}`} )
        console.log("getDataChildChild data: " + this.state.receiveDataChildChild);
    }

    getData2 = (val) => {
       this.props.toReturnData2(val);
       console.log("ChildComponent getData2: " + val);
    }

    render(){
        return(
            <div className="childComponent">
               <h3 className='divTitle'>ChildComponent </h3>
               <label className="labelfield">this.state.childVar:</label>
               <label className="dataPassed labelData opacity">{this.state.childVar}</label>

               <label className="labelfield">this.state.receiveDataChildChild:</label>
               <label className='dataPassed labelData Level2 opacity'>{this.state.receiveDataChildChild}</label>

               <label className="labelfield">data passed form parent (props):</label>
               <label className='dataPassedfromParent labelData'>{this.props.dataToPass}</label>

               <label className="labelfield">Data passed to Parent  </label>
               <input className="dataPassed labelData inputField" placeholder="input data to be passed to parent"
                 ref={(ref) => this.inputData = ref } 
                 type="text" onChange={this.handleChange}>
               </input>
               <ChildChildComponent toReturnData={this.getDataChildChild}
                                    toReturnData2={this.getData2}
                                    dataToPass={this.props.dataToPass} />
            </div>
        );
    }
}

export default ChildComponent;