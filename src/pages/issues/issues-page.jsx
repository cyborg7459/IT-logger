import React from 'react';
import './issues-style.scss';

import Card from '../../components/card/card-component';
import plus from '../../gallery/plus.png';

class IssuesPage extends React.Component {
    
    state = {
        issues : [{
            title : 'Changed network card in server 007',
            user : 'Sam Smith',
            updated : Date.now(),
            needsAttention : false
        }, {
            title : '1122 wireless down',
            user : 'Sara Wilson',
            updated : Date.now(),
            needsAttention : true
        }, {
            title : 'Changed network card in server 007',
            user : 'Sam Smith',
            updated : Date.now(),
            needsAttention : true
        }, {
            title : '1122 wireless down',
            user : 'Sara Wilson',
            updated : Date.now(),
            needsAttention : false
        }]
    }

    render() {
        return (
            <div className="issues-page-container">
                <div className="issues-list">
                    { this.state.issues.map((issue, idx) => {
                        return (
                            <Card key={idx} number={idx+1} issue={issue} />
                        )
                    }) }
                </div>
                <div id="add-btn">
                    Add new log
                </div>
            </div>
        )
    }
}

export default IssuesPage;