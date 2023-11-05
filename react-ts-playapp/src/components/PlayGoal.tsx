type PlaygGoalProps = {
    title: string;
    description: string;
};

export default function PlayGoal({title,description}:PlaygGoalProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </article>
}