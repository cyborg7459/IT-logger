import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4} from 'uuid';

import { addIsssue } from '../../redux/issue/issue.actions';
import './form-styles.scss';

class AddIssueForm extends React.Component {

    IssueAdditionHandler = () => {
        const title = document.getElementById('log-title').value;
        if(!title) {
            return alert('Please fill the title for the log');
        }
        const userList = document.getElementById('user-log');
        if(userList.selectedIndex === 0) {
            return alert('No user is selected !!! If no user available, then first create a new user')
        }
        const user = userList.options[userList.selectedIndex].text;
        const needsAttention = document.getElementById('attentionVal').checked;
        const issue = {
            id : uuidv4(),
            title,
            user,
            needsAttention,
            updated : Date.now()
        }

        this.props.addIssue(issue);
        this.props.hideForm();
    }
    
    render() {
        return (
            <div className="form-container">
                <div className="form-inner">
                    <h1>Add a new log <span onClick={() => {this.props.hideForm()}}> &times; </span> </h1>
                    <input placeholder='Enter title for log' className='form-control input-box' type="text" id="log-title"/>
                    <select placeholder='Select user' className='form-control' id='user-log'>
                        <option>Select user</option>
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
                    <br/><button onClick={this.IssueAdditionHandler} className='form-control btn'>Add log</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users : state.users.userList
})

const mapDispatchToProps = dispatch => ({
    addIssue : issue => dispatch(addIsssue(issue))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddIssueForm);