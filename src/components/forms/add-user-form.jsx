import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import './form-styles.scss';
import { addUser } from '../../redux/user/user-actions';

class AddUserForm extends React.Component {

    handleAddUser = () => {
        const name = document.getElementById('user-name').value;
        const position = document.getElementById('user-position').value;
        if(!name || !position) {
            return alert('Please fill out all fields');
        }
        const user = {
            id : uuidv4(),
            name, 
            position
        }
        this.props.addUser(user);
        this.props.hideForm();
    }

    render() {
        return (
            <div className="form-container">
                <div className="form-inner">
                    <h1>Add new user <span onClick={this.props.hideForm}> &times; </span> </h1>
                    <input placeholder='Enter name' className='form-control input-box' type="text" id="user-name"/> 
                    <input placeholder='Enter position' className='form-control input-box' type="text" id="user-position"/> 
                    <br/><button onClick={this.handleAddUser} className='form-control btn'>Add log</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addUser : user => dispatch(addUser(user))
})

export default connect(null,mapDispatchToProps)(AddUserForm);