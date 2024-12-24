import { useEffect, useState } from "react";
import { getUserById } from "../services/UserService";

function Profile() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        isAdmin: false,
    });

    useEffect(() => {
        getUserById()
            .then((res) => {
                setUser(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <>
            <div className="container">
                <h4 className="display-4 my-3">Profile</h4>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
        </>
    );
}

export default Profile;