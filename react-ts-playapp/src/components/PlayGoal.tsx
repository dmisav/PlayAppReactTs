import {type PropsWithChildren} from "react";
/*
type PlaygGoalProps = {
    title: string;
    description: string;
};*/
type PlaygGoalProps = PropsWithChildren<{title: string}>
export default function PlayGoal({title,children}:PlaygGoalProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    </article>
}