import {Link} from 'react-router-dom';

export default function ManuallyCreate(){
    return (
        <>
        <div className="manuallyCreate">
            <h1>Manually Create</h1>
            <form>
                <input type='text' placeholder='Name' />
                <select>
                    <option>Warrior</option>
                    <option>Rouge</option>
                    <option>Paladin</option>
                    <option>Mage</option>
                </select>
                <input type="file" />
                <input type="text" placeholder="Strength" />
                <input type="text" placeholder="Dexterity" />
                <input type="text" placeholder="Vitality" />
                <input type="text" placeholder="Intelligence" />
                <select>
                    <option>Backstory 1</option>
                    <option>Backstory 2</option>
                    <option>Backstory 3</option>
                </select>
                <Link to="/view_character"><button>Create Character</button></Link>
                <Link to="/new_character"><button class="backButton">Cancel</button></Link>
            </form>
        </div>
        </>
    );
}