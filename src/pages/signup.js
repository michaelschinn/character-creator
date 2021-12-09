export default function New_Character(){
    return (
        <>
            <h1>SignUp</h1>
            <form method='POST'>
                <input type='text' placeholder='Username' />
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button>SignUp</button>
            </form>
        </>
    );
}