import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiOutlineUser } from "react-icons/hi";
import { RiAtFill, RiFileLockLine } from "react-icons/ri";
import { useState } from 'react';

export default function Register(){

    const [show, setShow] = useState({ password: false, cpassword: false })

    return(
        <Layout>

       
        <Head>
        <title>Register</title>
        </Head>
        
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Registere dich</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Bitte gib deinen Namen, deine IU-Emailadresse und ein Passwort ein, um dich zu registrieren</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5'>
                <div className={styles.input_group}>
                    <input 
                    type="text"
                    name='Username'
                    placeholder='Dein Name'
                    className={styles.input_text}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiOutlineUser size={25} />
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    />
                    <span className='icon flex items-center px-4'>
                        <RiAtFill size={25}/>
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input 
                    type={`${show.password ? "text" : "password"}`}
                    name='password'
                    placeholder='Passwort'
                    className={styles.input_text}
                    />
                     <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, password: !show.password})}>
                        <RiFileLockLine size={25} />
                    </span>
                </div>

                <div className={styles.input_group}>
                    <input 
                    type={`${show.cpassword? "text" : "password"}`}
                    name='cpassword'
                    placeholder='Passwort wiederholen'
                    className={styles.input_text}
                    />
                     <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, cpassword: !show.cpassword})}>
                        <RiFileLockLine size={25} />
                    </span>
                </div>
               

                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Registrieren
                    </button>
                </div>
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400'>
            Schon registriert? <Link href="/login"><span className='text-blue-700'>Hier einloggen</span></Link>
            </p>
            
        </section>
        </Layout>
    )
}