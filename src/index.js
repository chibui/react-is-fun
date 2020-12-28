import React from 'react';
import { render } from 'react-dom';

let skiData = {
    total: 50,
    powder: 20, 
    backCountry: 10,
    goal: 100
}

    const getPercent = decimal => {
        return decimal * 100 + '%';
    }

    const calcGoalProgress = (total, goal) => {
        return getPercent(total/goal);
    }

const SkiDayCounter = ({backCountry, goal, powder, total}) => {
    return (
        <section>
            <div>
                <p>Total Days: { total }</p>
            </div>
            <div>
                <p>Powder Days: { powder }</p>
            </div>
            <div>
                <p>Back Country Days: { backCountry }</p>
            </div>
            <div>
                <p>Goal Progress: { calcGoalProgress(total, goal) }</p>
            </div>
        </section>
    )
}

render(
    <SkiDayCounter 
        total = {skiData.total}
        powder = {skiData.powder}
        backCountry = {skiData.backCountry}
        goal = {skiData.goal}
    />, 
    document.getElementById('root')
);