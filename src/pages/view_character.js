import {Link} from 'react-router-dom';
export default function ViewCharacter(){
    return (
        <div className="viewCharacter">
            <div className="sheet">
                <div className="charImage">
                    <div className="charTitle">
                        <h2>Jagra Deathstrike</h2>
                        <p className="genderClass">Male&nbsp;Assassin</p>
                    </div>
                    <div className="charData">
                        <p>
                            Strength: 5
                            <br />
                            Vitality: 3
                            <br />
                            Dexterity: 10
                            <br />
                            Intelligence: 8
                        </p>
                        <p>
                            HP: 30
                            <br />
                            MP: 80
                            <br />
                            Damage Bonus: 10
                            <br />
                            Accuracy: 75%
                            <br />
                            Defense: 20
                            <br />
                            Spell Potency: 80%
                        </p>
                    </div>
                </div>
                <div className="charControl">
                    <Link to="/manually_create"><button className="backButton">Back</button></Link>
                    <Link to="/manually_create"><button className="editButton">Edit</button></Link>
                    <Link to="/manually_create"><button className="saveButton">Save</button></Link>
                </div>
            </div>
        </div>
    );
}