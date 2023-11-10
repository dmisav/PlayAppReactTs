import {FormEvent, useRef} from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}
export default function NewGoal({onAddGoal}: NewGoalProps){
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        //new FormData(event.currentTarget);
        event.currentTarget.reset();
        onAddGoal(enteredGoal, enteredSummary);
    }
    
    return ( <form onSubmit={handleSubmit} > 
        <p>
            <label htmlFor="goal">Tour Goal</label>
            <input id="goal" type="text" ref={goal} />
        </p>
        <p>
            <label htmlFor="summary">Short Sumary</label>
            <input id="summary" type="text" ref={summary}/>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>)
}