import React, {Component} from 'react';
import './chat.css';
import {Link} from 'react-router-dom';
import {db} from '../../firebase';
import {connect} from 'react-redux';
import {updateChat} from '../../actions';
import {reduxForm, Field} from 'redux-form';
import Input from '../input';


class Chat extends Component {
    componentDidMount(){
        this.dbRef = db.ref('/');

        // this.dbRef.on('value', (snapshot)=>{
        //     // console.log('db values, ', snapshot.val())
        //     this.props.updateChat(snapshot.val())
        // })


        this.dbRef.on('value', this.props.updateChat);
    }
    componentWillUnmount(){
        this.dbRef.off();
    }
    sendMessage = async({message}) =>{
        console.log('send message', message)
        const newMessage = {
            name: localStorage.getItem('name'),
            message
        }
        await this.dbRef.push(newMessage);

        this.props.reset();
    }
    render(){
        const {log, handleSubmit} = this.props;
        console.log('log: ', log)
        const chatElements = Object.keys(log).map((key) => {
            const {name, message} = log[key];
            return (
                <li key={key}className="collection-item">
                    <b>{name}: </b> {message}
                </li>
            )
        })
        return (
            <div>
                <h1 className="center">Chat Room</h1>
                <div className="row right-align">
                    <Link className="btn blue darken-5" to="/">Home</Link>
                </div>
                <p>Hello, {localStorage.getItem('name')}</p>
                <div className="row">
                    <form onSubmit={handleSubmit(this.sendMessage)}className="col s8 offset-s2">
                        <Field name="message" label="Message" component = {Input} />
                    </form>
                </div>
                <ul className="collection">
                    {chatElements}
                </ul>
            </div>
        )
    }
}


Chat = reduxForm({
    form: 'text-message',
    validate: ({message}) => message ? {} : {message: 'No empty messages'}
})(Chat)

function mapStateToProps(state){
    return {
        log: state.chat.log
    }
}

export default connect(mapStateToProps, {updateChat})(Chat);