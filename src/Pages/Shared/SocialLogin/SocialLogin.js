import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    );
};

export default SocialLogin;