import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import './users-style.scss';
import delImg from '../../gallery/delete.png';
import { addUser, deleteUser } from '../../redux/user/user-actions';

class UsersPage extends React.Component {

    addUserToState = () => {
        const user = {
            id : uuidv4(),
            name : 'Shreyash Singh',
            position : 'CTO'
        }
        this.props.addUser(user);
    }

    render() {
        return (
            <div className="users-page-container">
                <div className="users-list">
                    {
                        this.props.users.userList.length === 0 
                        ? <h1 
                            style={{
                                textAlign: 'center',
                                fontWeight: '200'
                            }}>No users to display ....</h1>
                        : this.props.users.userList.map(user => {
                            return (
                                <div>
                                    <h2> 
                                        <div>
                                            {user.name} 
                                            <span className='position'> | {user.position}</span>
                                        </div>
                                        <img src={delImg} alt="delete"/>
                                    </h2>
                                    <hr/>
                                </div>
                            )
                        })
                    }
                    <div onClick={() => {this.addUserToState()}} className='btn add-btn' id="add-user">Add user</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users : state.users
});

const mapDispatchToProps = dispatch => ({
    addUser : user => dispatch(addUser(user)),
    deleteUser : id => dispatch(deleteUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);