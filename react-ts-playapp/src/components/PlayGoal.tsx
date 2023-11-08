import {type PropsWithChildren} from "react";
/*
type PlaygGoalProps = {
    title: string;
    description: string;
};*/
type PlaygGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>
export default function PlayGoal({title,id,children, onDelete}:PlaygGoalProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button onClick={()=>onDelete(id)}>Delete</button>
    </article>
}