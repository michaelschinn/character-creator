import {Link} from 'react-router-dom';
export default function ViewCharacter(){
    return (
        <div className="viewCharacter">
            <h1>View Character</h1>
            <h2>Jagra Deathstrike</h2>
            <div className="sheet">
                <div className="charImage">

                </div>
                <div>
                    <p>Male&nbsp;Assasin</p>
                    <p>
                        Strength: 5
                        <br />
                        Vitality: 3
                        <br />
                        Dexterity: 10
                        <br />
                        Intelligence: 8
                        <br />
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
            <Link to="/manually_create"><button className="backButton">Back</button></Link>
        </div>
    );
}