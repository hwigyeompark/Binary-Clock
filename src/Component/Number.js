import React, {Component} from 'react';
import OneOfNumber from "./OneOfNumber";

class Number extends Component{
    binaryShape = (num) => parseInt(num, 10).toString(2).padStart(4, '0');

    render(){
        return(
          <div>
              <OneOfNumber display = {this.binaryShape(this.props.value).substr(0, 1)}/>
              <OneOfNumber display = {this.binaryShape(this.props.value).substr(1, 1)}/>
              <OneOfNumber display = {this.binaryShape(this.props.value).substr(2, 1)}/>
              <OneOfNumber display = {this.binaryShape(this.props.value).substr(3, 1)}/>
          </div>
        );
    }
}
export default Number;