import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addIsssue, deleteAllIssues, deleteIssue } from '../../redux/issue/issue.actions';
import { getIssuesList } from '../../redux/issue/issue.selector';

import './issues-style.scss';
import Card from '../../components/card/card-component';
import Overlay from '../../components/overlay/overlay-component';

class IssuesPage extends React.Component {

    state = {
        isOverlayVisible : false
    }

    addIssueToState = () => {
        let issue =  {
            id : uuidv4(),
            title : '1122 wireless up and running',
            user : 'Sara Wilson',
            updated : Date.now(),
            needsAttention : false
        }
        this.props.addIsssue(issue);
    }

    deleteAllIssuesFromState = () => {
        this.props.deleteAllIssues();
    }

    deleteIssueFromState = id => {
        this.props.deleteIssue(id);
    }

    render() {
        return (
            <div className="issues-page-container">
                {
                    this.state.isOverlayVisible ? <Overlay /> : null
                }
                <div className="issues-list">
                    {
                        this.props.issues.length === 0 ?
                            <h1 className='size19' style={{textAlign : 'center', marginBottom : '35px', fontWeight: '200'}}>No logs to display at the moment .....</h1> 
                            : 
                            this.props.issues.map((issue, idx) => {
                            return (
                                <Card 
                                    key={issue.id} 
                                    deleteIssue={this.deleteIssueFromState} 
                                    issueID={issue.id} 
                                    number={idx+1} 
                                    issue={issue} 
                                />
                            )
                        })
                    }
                </div>
                <div onClick={() => {this.addIssueToState()}} id="add-log" className='btn add-btn'>
                    Add new log
                </div>
                <div onClick={() => {this.deleteAllIssuesFromState()}} className='btn delete-btn'>
                    Delete all logs
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    issues : getIssuesList(state)
})

const mapDispatchToProps = dispatch => ({
    addIsssue : issue => dispatch(addIsssue(issue)),
    deleteIssue : id => dispatch(deleteIssue(id)),
    deleteAllIssues : () => dispatch(deleteAllIssues())
})

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPage);