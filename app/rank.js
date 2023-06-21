export default function Rank(props) {
    return (
        <div className="rankContainer">
            <div className="rank">
                <h3>{props.name}</h3>
                <span>{props.number} {props.difficulty} <br/> completed.</span>
            </div>
            <div className="orderMembers">

            </div>
        </div>
    );
}