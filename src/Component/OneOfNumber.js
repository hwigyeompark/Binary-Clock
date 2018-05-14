import React, {Component} from 'react';

class OneOfNumber extends Component{
    state = {
        shape : '○'
    };

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps');
        console.log(nextProps);
        console.log(prevState);
        return{
            shape:nextProps.display === '0' ? '○':'●'
        }
    }
    render(){
        return(
          <span>
              {this.state.shape}
          </span>
        );
    }
}
export default OneOfNumber;