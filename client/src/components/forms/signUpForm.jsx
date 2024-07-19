import { useState } from "react";
import RequiredField from "./requiredField.jsx";

export default function SignUpForm() {


    const [form, setForm] = useState({
        username: '',
        email: { address: '', valid: true },
        password: ''
    });

    const [showRequired, setShowRequired] = useState({
        username: false,
        email: false,
        password: false
    });
    
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: name === 'email' ? { address: value } : value
        });
        setShowRequired({
            ...showRequired,
            [name]: !value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!form.email.address) {
            setErrorMessage('Invalid email');
            return;
        } else if (!form.username) {
            setErrorMessage('Username is required');
            return;
        } else if (!form.password) {
            setErrorMessage('Password is required');
            return;
        }
        
        try {
            // Call addUser mutation function with the form data
            const newUser = ({
                variables: {
                    username: form.username,
                    email: form.email.address,
                    password: form.password,
                }
            });

            console.log(newUser)
            //Display a message
            setMessage('Thank you for joining us!');

            // Reset form state
            setForm({
                username: '',
                email: { address: '', valid: true },
                password: ''
            });
            setShowRequired({
                username: false,
                email: false,
                password: false
            });
            setErrorMessage('');

        } catch (error) {
            console.error('Error occurred during form submission:', error);
            setErrorMessage('An error occurred while processing your request');
        }
    };

    return (
        <div className="">
            <form className="form pt-4 flex justify-center" onSubmit={handleFormSubmit}>
                <section className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 pt-10">
                    <section>
                        <label htmlFor="username" className="block text-sm font-semibold leading-6 text-white footer-2">
                            Username
                        </label>
                        <section className="mt-2.5">
                            <input
                                value={form.username}
                                type="text"
                                name="username"
                                id="username"
                                onMouseLeave={() => setShowRequired({ ...showRequired, username: !form.username })}
                                onChange={handleInputChange}
                            />
                            {showRequired.username && !form.username && <RequiredField />}
                        </section>
                    </section>
                    <section>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white footer-2">
                            Email
                        </label>
                        <section className="mt-2.5">
                            <input
                                value={form.email.address}
                                type="email"
                                name="email"
                                id="email"
                                onMouseLeave={() => setShowRequired({ ...showRequired, email: !form.email.address })}
                                onChange={handleInputChange}
                            />
                            {!form.email.valid && <p className='text-red-700'>Invalid email</p>}
                            {showRequired.email && !form.email.address && <RequiredField />}
                        </section>
                    </section>
                    <section className="sm:col-span-2">
                        <label htmlFor="password" className="block text-sm font-semibold leading-6 text-white footer-2">
                            Password
                        </label>
                        <section className="mt-2.5">
                            <input
                                value={form.password}
                                type="password"
                                name="password"
                                id="password"
                                onMouseLeave={() => setShowRequired({ ...showRequired, password: !form.password })}
                                onChange={handleInputChange}
                            />
                            {showRequired.password && !form.password && <RequiredField />}
                        </section>
                    </section>
                    <section className="mt-10 sm:col-span-2 submit flex justify-center">
                        <button
                            type="submit"
                            className="block rounded p-3.5 justify-center text-sm text-white font-semibold shadow-sm bg-black hover:bg-white hover:text-gray-900"
                        >Sign Up</button>
                    </section>
                </section>
            </form>
            {message && (
                <section className="m-3 flex justify-center">
                    <p className="text-white message">{message}</p>
                </section>
            )}
            {errorMessage && (
                <section className="m-3 flex justify-center">
                    <p className="text-white error-message">{errorMessage}</p>
                </section>
            )}
        </div>
    )
}
