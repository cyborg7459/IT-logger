import React from 'react';
import './card-style.scss';

class Card extends React.Component {

    convertStampDate(unixtimestamp){
        var months_arr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var date = new Date(unixtimestamp*1000);
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var fulldate = month+' '+day+','+year+' at '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return fulldate;
    }

    render() {
        const issue = this.props.issue;
        return (
            <div className="card-container">
                <h1 className={`size15 ${ issue.needsAttention ? 'attention':''}`}>{issue.title}</h1>
                <div>
                    ID #{this.props.number} last updated by <b> {issue.user} </b> on {this.convertStampDate(issue.updated/1000)}
                </div>
            </div>
        )
    }
}

export default Card;