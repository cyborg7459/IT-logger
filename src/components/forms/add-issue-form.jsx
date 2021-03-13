import React from 'react';
import { connect } from 'react-redux';
import { addIsssue } from '../../redux/issue/issue.actions';

import './form-styles.scss';

class AddIssueForm extends React.Component {

    IssueAdditionHandler = () => {
        const title = document.getElementById('log-title').value;
        if(!title) {
            return alert('Please fill the title for the log');
        }
        const userList = document.getElementById('user-log');
        const user = userList.options[userList.selectedIndex].text;
        const needsAttention = document.getElementById('attentionVal').checked;
        const issue = {
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