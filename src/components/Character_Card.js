export default function CharacterCard(props) {
    console.log(props.data);
    return (
        <article className="characterCard">
            <div className="cardHeading">
                <div className="Name">{props.data.firstName}</div>
                <div className="genderClass">Female Assassin</div>
            </div>
            <div className="cardStats"></div>
            <div className="cardBackStory">
                <div classsName="heading">Backstory</div>
                <p></p>
            </div>
            <div className="cardControl">
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
            <div className="bg"></div>
        </article>
    );
}