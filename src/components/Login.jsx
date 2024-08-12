
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const Login = () => {
    const { signInUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                event.target.reset();
                navigate('/')

            })

            .catch(error => {
                console.log(error.message)
                event.target.reset();
            })

    }


    const handleGoggleLogin = () => {
        console.log("coming mama")
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <h2>New Here Please <Link to='/registration'><button className="btn btn-active btn-link">Register</button></Link></h2>
                        </div>

                    </form>
                    <div className="mb-4 px-4">
                        <button onClick={handleGoggleLogin} className="btn btn-primary w-full">Goggle Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;