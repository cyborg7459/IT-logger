import React from 'react';
import './users-style.scss';

import delImg from '../../gallery/delete.png';

class UsersPage extends React.Component {

    state = {
        users : [{
            name : "Sam Smith",
            position : 'Head technician'
        }, {
            name : "Sara Ann",
            position : 'Chief Engineer'
        }, {
            name : "Jake Dean",
            position : 'Operations worker'
        }, {
            name : 'Shreyash Singh',
            position : 'CEO'
        }]
    }

    render() {
        return (
            <div className="users-page-container">
                <div className="users-list">
                    {this.state.users.map(user => {
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
                    })}
                    <div className='btn add-btn' id="add-user">Add user</div>
                </div>
            </div>
        )
    }
    
}

export default UsersPage;