import React from 'react';

class ChildChildComponent extends React.Component {
    state = {
        childChildVar: '',
    }

    handleChange = () => {
        var data = this.inputData.value;
        this.setState({ childChildVar: `${data}`})
        this.props.toReturnData(data);
        this.props.toReturnData2(data);
        console.log("childChildComponent Data: " + data)
    }

    render() {
        return(
          <div className="childChildComponent">
            <h3 className='divTitle'>ChildChildComponent</h3>
            <label className="labelfield">this.state.childChildVar:</label>
            <label className='labelData'> {this.state.childChildVar}</label>
            
            <label className="labelfield">data passed form parent (props):</label>
            <label className='dataPassedfromParent labelData'>{this.props.dataToPass}</label>
               
            <label className="labelfield">Data passed to Parent</label>
            <input className="Level2 labelData inputField" type='text' placeholder="input data to be passed to PARENTS"
              ref={(ref) => this.inputData = ref}
              onChange={this.handleChange}>
            </input>
          </div>
        );
    }
}

export default ChildChildComponent;