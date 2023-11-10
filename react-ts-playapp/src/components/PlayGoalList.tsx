import PlayGoal from "./PlayGoal.tsx";
import { type PlayGoal as PGoal } from  "../App.tsx"
import InfoBox from "./InfoBox.tsx";
import {ReactNode} from "react";

type PlayGoalListProps ={
    goals: PGoal [];
    onDeleteGoal: (id: number) => void; 
}
export default function PlayGoalList({goals, onDeleteGoal}: PlayGoalListProps){
    if (goals.length === 0) {
        return (
            <InfoBox mode="hint">
                You have no goals yet
            </InfoBox>);
    }
    
let warningBox: ReactNode; 
    
if (goals.length >4){
    warningBox = (
        <InfoBox mode="warning" severity="high">
            Dont' put too much goals
        </InfoBox>
    );
}
    
return (
    <>
        {warningBox}
    <ul>
        { goals.map((goal) => (
            <li key={goal.id}>
                <PlayGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                    <p>{goal.description}</p>
                </PlayGoal>
            </li>
        ))}
    </ul>
    </>
    );
}