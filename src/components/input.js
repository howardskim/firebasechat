import React, {Component} from 'react';

class Input extends Component {
    constructor(props){
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    state = {
        activeClass: ''
    }
    onFocus(){
        const {onFocus} = this.props.input;
        this.setState({
            activeClass: 'active'
        })
        onFocus.apply(arguments)
    }
    onBlur(e){
        const {onBlur} = this.props.input;
        console.log(e.target);
        if(!e.target.value){
        this.setState({
            activeClass: ''
        })
        onBlur.apply(arguments)
    }
    }
    render(){
        const {input, label, type, meta: {touched, error}} = this.props;
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input 
                        {...input} 
                        type={type ? type : 'text'}
                        autoComplete="off"
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                    <label className={this.state.activeClass}>{label}</label>
                </div>
                <p className="red-text text-darken-2">{touched && error}</p>
            </div>
        )
    }
}

export default Input;