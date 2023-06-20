export default function Rank(props) {
    let avatars = props.users.map(user => {
        if (user.problemData.totalCount > 200)
            return user.name;
        return "";
    });

    return (
        <div class="rank">
            <h3>{props.name}</h3>
            <span>{props.number} {props.difficulty} <br/> completed.</span>
            {avatars}
        </div>
    );
}