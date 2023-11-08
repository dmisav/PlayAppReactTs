import PlayGoal from "./PlayGoal.tsx";
import { type PlayGoal as PGoal } from  "../App.tsx"

type PlayGoalListProps ={
    goals: PGoal [];
    onDeleteGoal: (id: number) => void; 
}
export default function PlayGoalList({goals, onDeleteGoal}: PlayGoalListProps){
return (
    <ul>
        { goals.map((goal) => (
            <li key={goal.id}>
                <PlayGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                    <p>{goal.description}</p>
                </PlayGoal>
            </li>
        ))}
    </ul>
    );
}