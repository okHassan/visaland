import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'
import { useRegisterMutation } from '../../redux/api/authApi';
import { setCookie } from '../../utils/utils';
import { startLoading, stopLoading } from '../../redux/appSlice/loadingSlice';
import { useDispatch } from 'react-redux';

const SignUp = () => {

    const dispatch = useDispatch();

    const [register, { data, error, isSuccess }] = useRegisterMutation();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {

        dispatch(startLoading());

        if (error) {
            String(error.message) === "undefined" ? toast.error('server busy, please try again later') : toast.error(error.message);
            return;
        }
        if (isSuccess) {

            if (data.message) {
                toast.error(data.message);
                return;
            }

            if (data.token) {
                setCookie('token', data.token, 7);

                toast.success('Account created successfully.');

                window.location.href = '/'; // replace with your desired route after successful registration
            }

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }

        dispatch(stopLoading());

    }, [isSuccess, error, data])

    const handleSubmit = async (e) => {

        dispatch(startLoading());

        e.preventDefault();

        const { firstName, lastName, email, password, confirmPassword } = formData;

        // Validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            toast.error('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        let data = new Object();
        data.name = firstName + ' ' + lastName;
        data.email = email;
        data.password = password;

        await register(data);
    };

    return (
        <div className="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-100">
                    Create Account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-100">
                            First Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                autoComplete="name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-600 outline-none px-4 text-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-100">
                            Last Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                autoComplete="name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-600 outline-none px-4 text-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-600 outline-none px-4 text-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                value={formData.password}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-600 outline-none px-4 text-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-100">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                autoComplete="current-password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-600 outline-none px-4 text-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create Account
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Have an account?{' '}
                    <Link to="/" className="font-bold leading-6 text-indigo-500">
                        LogIn Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
