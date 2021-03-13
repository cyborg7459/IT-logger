import React from 'react';
import { connect } from 'react-redux';

import './form-styles.scss';

class AddIssueForm extends React.Component {
    render() {
        return (
            <div className="form-container">
                <div className="form-inner">
                    <h1>Add a new log <span> &times; </span> </h1>
                    <input placeholder='Enter title for log' className='form-control input-box' type="text" id="log-title"/>
                    <select className='form-control' id='user-log'>
                        {
                            this.props.users.map((user,idx) => {
                                return (
                                    <option value={user.name}>
                                        {user.name}
                                    </option>
                                )
                            })
                        }
                    </select>  
                    <input id='attentionVal' style={{marginTop: '20px', marginRight : '10px'}} type="checkbox" value="Needs attention"/>Needs attention
                    <br/><button className='form-control btn'>Add log</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users : state.users.userList
})

export default connect(mapStateToProps)(AddIssueForm);