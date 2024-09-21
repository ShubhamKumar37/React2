import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

const YoutubeForm = () => {

    const { register, control, handleSubmit, formState: { errors } } = useForm();

    function onSubmitHandler(data) {
        console.log("Form submitted");
        console.log("This is the form data = ", data)
    }

    return (
        <div className='flex flex-col items-center p-4 bg-gray-200 rounded-md shadow-md text-black dark:bg-gray-800 dark:text-white'>
            <form className='space-y-4 flex flex-col' onSubmit={handleSubmit(onSubmitHandler)}>
                <label htmlFor='userName' className='block'>
                    <p className='text-lg font-medium'>User name</p>
                    <input
                        type="text"
                        name="userName"
                        id='userName'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500'
                        {...register("userName", {
                            required: "Username is required",
                            validate: (fieldValue) => {
                                if (fieldValue === "admin") {
                                    return "The username 'admin' is not allowed.";
                                }
                                return false;
                            }
                        })}
                    />
                </label>
                {errors["userName"] && <span className='text-red-500'>{errors["userName"].message}</span>}

                <label htmlFor='email' className='block'>
                    <p className='text-lg font-medium'>Email</p>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500'
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address"
                            }
                        })}
                    />
                </label>
                {errors["email"] && <span className='text-red-500'>{errors["email"].message}</span>}

                <label htmlFor='channel' className='block'>
                    <p className='text-lg font-medium'>Youtube channel</p>
                    <input
                        type="text"
                        name='channel'
                        id='channel'
                        className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500'
                        {...register("channel", { required: "Channel name is required" })}
                    />
                </label>
                {errors["channel"] && <span className='text-red-500'>{errors["channel"].message}</span>}

                <button type='submit' className='px-4 py-2 font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700'>Submit</button>
            </form>

            <DevTool control={control} />
        </div>
    )
}

export default YoutubeForm;
