import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from './input';

const SetName = (props) => {
    function handleSubmit(values){
        localStorage.setItem('name', values.name);

        props.history.push('/chat')
    }
    return (
        <div>
            <h1 className="center">What's your name?</h1>
            <div className="row">
                <form onSubmit={props.handleSubmit(handleSubmit)}className="col s8 offset-s2">
                    <Field name="name" label="Name" component={Input} />
                    <div className="row right-align">
                        <button className="btn purple" >Set Name</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function validate({name}){
    return name ? {} : {name: 'Please enter name'};
}

export default reduxForm({
    form: 'set-name',
    validate
})(SetName)