import React from 'react';
import BoardSales from './BoardSales';
import HighPart from './HighPart';
import Preview from './Preview';

function Dashboard() {
    return ( 
        <div className="dashboard">
            <HighPart/>
            <Preview/>
            <BoardSales/>
        </div>
     );
}

export default Dashboard;