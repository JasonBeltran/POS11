

const UserPage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('USER OBJECT:', user); 

    const handleSignOut = async () => {
        localStorage.removeItem('user');
        window.location.href = '/login';

    };

    return (
        <div className="user-page">
            <h1>{user.first_name} {user.last_Name}</h1>

            <button onClick = {handleSignOut}>Sign Out</button>

        </div>
    );
};

export default UserPage;