import { Link, usePage } from '@inertiajs/inertia-react'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import useTranslate from './Hooks/useTranslate';
import { ContextApi } from './Contexts/AppContext';
import NavLink from './Components/NavLink';
import FlashMessage from './Components/FlashMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';
import Auth from './Components/Auth';
import NotAuth from './Components/NotAuth';

export default function Layout(props: { children: JSX.Element }) {
    const { auth } = usePage().props;

    const [showNav, setShowNav] = useState(false);
    const [appState, setAppState] = useContext(ContextApi)!;
    const hideNav = () => {
        if (showNav)
            setShowNav(false);
    }
    const toggleLanguage = () => {
        hideNav();
        setAppState(state => ({ ...state, lang: (state.lang === 'ar') ? 'en' : 'ar' }))
    }
    const t = useTranslate();
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <div className={`${appState.lang === 'ar' ? 'rtl' : ''} App`}>
                <FlashMessage />
                <nav className="bg-ov-white ">
                    <div className="container flex items-center justify-between py-2">
                        <Link href='/'>
                            <img className='w-[50px]' src='/images/logo.png' />
                        </Link>
                        <ul className={`${showNav ? 'flex' : 'hidden'} nav shadow 2xl:shadow-none 2xl:items-center items-start 2xl:flex gap-6 font-bold`}>
                            <NavLink onClick={hideNav} href="/" name={t('الرئيسية', 'Home')} />
                            <NavLink onClick={hideNav} href="/about" name={t('عنا', 'About')} />
                            <NavLink onClick={hideNav} href="/images_show" name={t('الصور', 'Images')} />
                            <NavLink onClick={hideNav} href="/books" name={t('المواد', 'Material')} />
                            <NavLink onClick={hideNav} href="/articles" name={t('المقالات', 'Articles')} />
                            <NavLink onClick={hideNav} href="/contact" name={t('تواصل معنا', 'Contact')} />
                            <NavLink onClick={hideNav} href="/quiz" name={t('الامتحانات', 'Quiz')} />
                            <NavLink onClick={hideNav} href="/meetings" name={t('جلسات زووم', 'Zoom Meetings')} />
                            <NavLink onClick={hideNav} href="/about-program" name={t('عن البرنامج', 'About Program')} />
                            <Auth>
                                <NavLink onClick={hideNav} href="/dashboard" name={t('لوحة التحكم', 'Dashboard')} />
                                <NavLink onClick={hideNav} href="/logout" name={t('تسجيل الخروج', 'Logout')} />
                            </Auth>
                            <NotAuth>
                                <NavLink onClick={hideNav} href="/login" name={t('تسجيل الدخول', 'Login')} />
                            </NotAuth>
                            <li onClick={toggleLanguage} className="text-lg font-open-sans rounded border-second border px-1 hover:bg-second hover:text-white cursor-pointer transition-colors">
                                {
                                    appState.lang === 'ar' ? 'English' : 'Arabic'
                                }
                            </li>
                        </ul>
                        <button id='navbars' className='2xl:hidden' onClick={() => setShowNav(!showNav)}>
                            <FontAwesomeIcon icon={faNavicon} size="2x" />
                        </button>
                    </div>
                </nav>
                {props.children}
            </div>
            <footer className="bg-black text-white p-4 text-center">
                All Copyrights &copy; reserved for Turing company {(new Date()).getFullYear()}
                <br />
                Eng.Habib Gamal
            </footer>
        </div>
    )
}

