import { Link, useNavigate } from "react-router-dom";
import SocilaLogin from "../../components/SocilaLogin";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";


const Register = () => {
    const navigate = useNavigate();
    const {createUser,updateUser} = useAuth();
    
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

         // Name validation
         if( name.length == 0){
            toast.error("Name filed is require");
            return ;
        }

        
        // Email validation
        if( email.length == 0){
            toast.error("Email filed is require");
            return ;
        }

        // password validation
        const spacialCharecter = /[\W_]/g;
        const capitalLetter = /[A-Z]/;
        if(password.length < 6) {
            toast.error("Password is less than 6 characters");
            return ;
        } else if( !spacialCharecter.test(password) ){
            toast.error("Don't have a special character");
            return ;
        } else if(!capitalLetter.test(password)) {
            toast.error("don't have a capital letter");
            return ;
        }

        try {
            const user = await createUser(email, password);
            if( user.user ){
                await updateUser(name,photo );
                // const newUser = {name ,email, photo}
                // try {
                //     const res = await fetch("https://assignment-10-server-theta-ivory.vercel.app/users", {
                //         method : "POST",
                //         headers : {"Content-type":"application/json"},
                //         body : JSON.stringify(newUser)
                //     });
                //     const data = await res.json();
                    
                // } catch (error) {
                //     toast.error(error.message);
                // }
            }
            toast.success("Register Successfull")
            navigate('/');
        } catch (error) {
        
            if( error.message == 'Firebase: Error (auth/email-already-in-use).'){
                toast.error("This email already exists");
                return
            }else{
                toast.error(error.message);
                return
            }
        }

    }
    return (
        <section className=''>
        <div className=' min-h-screen py-28' >
            <div className="container flex items-start">
                <div className=" w-[300px] md:w-[450px] overflow-hidden  mx-auto rounded-lg">
                    
                        <div className='px-5 py-5 md:px-10 md:pb-10 rounded-b-lg bg-white overflow-hidden border '>
                            <div className='text-3xl pb-5 font-semibold text-gray-700 '>Register Form</div>
                            <div>
                                <form onSubmit={handleRegister}>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Full Name</label>
                                        <input type="text" name='name' placeholder='Full Name' className='px-3 w-full py-3  border border-gray-200 text-gray-800 rounded-md outline-none' />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Image URL</label>
                                        <input type="text" name='photo' placeholder='Image URL' className='px-3 w-full py-3  border border-gray-200 text-gray-800 rounded-md outline-none' />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Email</label>
                                        <input type="email" name='email' placeholder='Email' className='px-3 w-full py-3  border border-gray-200 text-gray-800 rounded-md outline-none' />
                                    </div>
                                    <div className='mb-5'>
                                        <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Password</label>
                                        <input type="password" name='password' placeholder='Password' className='px-3 w-full py-3  border border-gray-200 text-gray-800 rounded-md outline-none' />
                                    </div>
                                    <div className='mb-4 flex gap-5'>
                                        <button type='submit' className='px-5 py-3 rounded-md bg-primary text-white font-medium w-full'>Sign Up</button>
                                       <SocilaLogin />
                                    </div>
                                </form>
                            </div>
                            <p className='text-center text-gray-700'>Already have a  account ? <Link to={'/login'} className='text-primary'>Sign In</Link> </p>
                            
                        </div>
                
                </div>
                
            </div>
        </div>
    </section>
    );
};

export default Register;