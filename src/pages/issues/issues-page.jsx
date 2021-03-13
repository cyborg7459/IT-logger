import React from 'react';
import { connect } from 'react-redux';
import { addIsssue, deleteAllIssues } from '../../redux/issue/issue.actions';

import './issues-style.scss';
import Card from '../../components/card/card-component';

class IssuesPage extends React.Component {

    addIssueToState = () => {
        let issue =  {
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

    render() {
        return (
            <div className="issues-page-container">
                <div className="issues-list">
                    {
                        this.props.issues.issueList.length === 0 ?
                            <h1 style={{textAlign : 'center', marginBottom : '15px'}} >Currently no issues</h1> 
                            : 
                            this.props.issues.issueList.map((issue, idx) => {
                            return (
                                <Card key={idx} number={idx+1} issue={issue} />
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
    issues : state.issues
})

const mapDispatchToProps = dispatch => ({
    addIsssue : issue => dispatch(addIsssue(issue)),
    deleteAllIssues : () => dispatch(deleteAllIssues())
})

export default connect(mapStateToProps, mapDispatchToProps)(IssuesPage);