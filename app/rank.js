export default function Rank(props) {
    let members = props.users.map(user => {
        return (
            <div style={{width:"25px", height: "25px", border:"2px solid green"}}>
                <img style={{width: "25px", height: "25px"}} src={user.imageUrl}></img>
            </div>
        );
    });
    
    return (
        <div className="rankContainer">
            <div className="rank">
                <h3>{props.name}</h3>
                <span>{props.number} {props.difficulty} <br/> completed.</span>
            </div>
            <div className="orderMembers">
                {members}
            </div>
        </div>
    );
}