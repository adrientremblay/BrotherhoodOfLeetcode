export default function Rank(props) {
    return (
        <div class="rank">
            <h3>{props.name}</h3>
            <span>{props.number} {props.difficulty} <br/> completed.</span>
        </div>
    );
}