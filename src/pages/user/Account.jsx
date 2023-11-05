
import useAuth from '../../hooks/useAuth';

const Account = () => {
    const {user} = useAuth();
    return (
        <div>
            <p>Hello <span className='text-blue-600 font-semibold'>{user?.displayName}</span></p>
        </div>
    );
};

export default Account;