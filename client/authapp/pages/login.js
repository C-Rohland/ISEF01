import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import {RiAtFill, RiFileLockLine } from "react-icons/ri";
import { useState } from 'react';
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';

export default function Login(){

    const [show, setShow] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit
    })

    async function onSubmit(values){
        console.log(values)
    }

    return(
        <Layout>


        <Head>
            <title>Login</title>
        </Head> 

        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Willkommen!</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Melde dich mit deiner IU-Mailadresse an und starte dein Quiz!</p>
            </div>
        {/* form */}
        <form className="flex flex-col gap-5">
            <div className={styles.input_group}>
                <input 
                type="email"
                name='email'
                placeholder='Deine IU-Emailadresse'
                className={styles.input_text}
                    {...formik.getFieldProps('email')}
                />
                <span className='icon flex items-center px-4'>
                <RiAtFill size={25}/>
                </span>
            </div>
            <div className={styles.input_group}>
                <input 
                type={`${show ? "text" : "password"}`}
                name='password'
                placeholder='Dein Passwort'
                className={styles.input_text}
                {...formik.getFieldProps('email')}
                />
                <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                <RiFileLockLine size={25}/>
                </span>
            </div>

          {/* login button */}   
            <div className={styles.button}>
                <button type='submit'>
                    Login
                </button>
            </div>
        
        </form>
        {/* bottom */}
        <p className='text-center text-gray-400'>
            Du hast noch keinen Account? Dann klicke hier um dich zu <Link href="/register"><span className='text-blue-700'>registrieren</span></Link>
        </p>
        </section>

        </Layout>
    )
}