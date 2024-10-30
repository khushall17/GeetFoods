import React, { useState } from "react"

const Signin = () => {

    const [user, setuser] = useState([{ username: "", email: "", mob: "", password: "", confirmPassword: "" }]);

    const handlechange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const [error, setError] = useState([])
    const [flag, setflag] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newError = {}
        if (user.username === "") {
            //  setError({username:"Please enter usename"});
            newError.username = "please enter username";
        } else if (user.username <= 2 || user.username >= 12) {
            newError.username = "Username lenght must be between 2 to 20"
        }
        if (user.email === "") {
            newError.email = "Please enter email";
        } else if (user.email.indexOf("@") <= 0) {
            newError.email = ""
        } else if (user.email.charAt(user.email.length - 4) !== "." && (user.email.charAt(user.email.length - 3) !== ".")) {
            newError.email = " '.' invalid position"
        }
        if (user.mob === "") {
            newError.mob = "Please enter password";
        } else if (isNaN(user.mob)) {
            newError.mob = "please enter valid number"
        } else if (user.mob.length <= 10 || user.mob.length > 1) {
            newError.mob = "Please enter valid number"
        }
        if (user.password === "") {
            newError.password = "Please enter password"
        } else if (user.password >= 6 || user.password <= 16) {
            newError.password = "krmmmm"
        }
        if (user.confirmPassword === "") {
            newError.confirmPassword = "Please enter confirm Password";
        } else if (user.password !== user.confirmPassword) {

        }
        else {
            setflag(true)
        }

        setError([newError])
    }


    return <>

        <section className="bg-gray-50 dark:bg-gray-900 mt-20">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="flex justify-center item-center flex-col" onSubmit={handleSubmit}>
                            <div className="mb-2" onSubmit={handleSubmit}>
                                <input type="text" placeholder="username" onChange={handlechange} value={user.username} name="username" autoComplete="off"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <span>{error}</span>

                            <div className="mb-2" onSubmit={handleSubmit}>
                                <input type="text" placeholder="Email" onChange={handlechange} value={user.email} name="email" autoComplete="off"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-2" onSubmit={handleSubmit}>
                                <input type="text" placeholder="Mobile Number" onChange={handlechange} value={user.mob} name="mob" autoComplete="off"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-2" onSubmit={handleSubmit}>
                                <input type="password" placeholder="Password" onChange={handlechange} value={user.password} name="password" autoComplete="off"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-2" onSubmit={handleSubmit}>
                                <input type="password" placeholder="correct-password" onChange={handlechange} value={user.confirmPassword} name="currentPassword" autoComplete="off"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <button type="submit" className="w-full text-[#fbc531] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default Signin;
