import PlayGoal from "./PlayGoal.tsx";
import { type PlayGoal as PGoal } from  "../App.tsx"

type PlayGoalListProps ={
    goals: PGoal [];
}
export default function PlayGoalList({goals}: PlayGoalListProps){
return (
    <ul>
        { goals.map((goal) => (
            <li key={goal.id}>
                <PlayGoal title={goal.title}>
                    <p>{goal.description}</p>
                </PlayGoal>
            </li>
        ))}
    </ul>
    );
}