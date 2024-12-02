import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './login.scss';
import Image from 'next/image';
import { store } from '@/Redux/Store';
import { SET_LOGIN } from '@/Redux/Slices/Admin';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = (data) => {
        setLoading(true)
        try {
            setTimeout(() => {
                store.dispatch(SET_LOGIN())
                setLoading(false)
            }, 2500);
        }
        catch (e) {
            console.error(e)
        }
        console.log('Form Data:', data);
        // Add your login logic here (e.g., API call)
    };

    return (
        <section className="loginPage">
            <figure>
                <Image className="logo" src="/images/logo-black.png" width={400} height={106} alt="Logo" />
                <Image src="/images/login.webp" fill alt="Login illustration" />
            </figure>
            <div className="loginCont">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputCont">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                    </div>
                    <div className="inputCont">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters' },
                                maxLength: { value: 9, message: 'Password cannot exceed 9 characters' }
                            })}
                        />
                        {errors.password && <span className="error">{errors.password.message}</span>}
                    </div>
                    <div className="inputCont">
                        <button disabled={loading} className="themeBtn" type="submit">
                            {loading ? (
                                <>
                                    Loading <span className="loader" />
                                </>
                            ) : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
