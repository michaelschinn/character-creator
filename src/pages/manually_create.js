export default function ManuallyCreate(){
    return (
        <>
            <h1>Manually Create</h1>
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
            <button>Finalize Character</button>
        </>
    );
}