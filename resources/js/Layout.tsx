import { Link, usePage } from '@inertiajs/inertia-react'
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import useTranslate from './Hooks/useTranslate';
import { ContextApi } from './Contexts/AppContext';
import NavLink from './Components/NavLink';
import FlashMessage from './Components/FlashMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faEarth, faLanguage, faNavicon } from '@fortawesome/free-solid-svg-icons';
import Auth from './Components/Auth';
import NotAuth from './Components/NotAuth';
import { Inertia } from '@inertiajs/inertia';
import { Button, message } from 'antd';

export default function Layout(props: { children: JSX.Element }) {
    const toTopBtn = useRef<HTMLButtonElement>(null);
    const { auth } = usePage().props;
    useEffect(() => {
        let loading: any;
        Inertia.on('start', () => {
            loading = message.loading('', 0);
        })
        Inertia.on('finish', () => {
            setTimeout(loading)
        })
    }, [])
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
    useEffect(() => {
        window.onscroll = () => {
            console.log(window.scrollY);
            if (window.scrollY > 0) {
                toTopBtn.current?.classList.remove('hidden');
            }

            if (window.scrollY === 0) {
                toTopBtn.current?.classList.add('hidden');
            }
        }
    }, []);
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <div className={`${appState.lang === 'ar' ? 'rtl' : ''} App`}>
                <FlashMessage />
                <nav className="bg-ov-white ">
                    <div className="container flex items-center justify-between py-2">
                        <Link href='/'>
                            <img className='w-[50px]' src='/images/logo.png' />
                        </Link>
                        <div className="flex gap-4 items-center">
                            <ul className={`${showNav ? 'flex' : 'hidden'} ${appState.lang === 'ar' ? 'left-10' : 'right-10'}  nav shadow 2xl:shadow-none 2xl:items-center items-start 2xl:flex gap-6 font-bold`}>
                                <NavLink onClick={hideNav} href="/" name={t('الرئيسية', 'Home')} />
                                <NavLink onClick={hideNav} href="/about" name={t('عنا', 'About')} />
                                <NavLink onClick={hideNav} href="/images_show" name={t('الصور', 'Images')} />
                                <NavLink onClick={hideNav} href="/books" name={t('المواد', 'Material')} />
                                <NavLink onClick={hideNav} href="/articles" name={t('معلومات عن البيانو', 'Piano Info')} />
                                <NavLink onClick={hideNav} href="/meetings" name={t('جلسات زووم', 'Zoom Meetings')} />
                                <NavLink onClick={hideNav} href="/quiz" name={t('الامتحانات', 'Quiz')} />
                                <NavLink onClick={hideNav} href="/about-program" name={t('عن البرنامج', 'About Program')} />
                                <NavLink onClick={hideNav} href="/contact" name={t('تواصل معنا', 'Contact')} />
                                <NavLink onClick={hideNav} href="/feedback" name={t('انطباعك', 'Feedback')} />
                                <Auth>
                                    <NavLink onClick={hideNav} href="/dashboard" name={t('لوحة التحكم', 'Dashboard')} />
                                    <NavLink onClick={hideNav} href="/logout" name={t('تسجيل الخروج', 'Logout')} />
                                </Auth>
                                <NotAuth>
                                    <NavLink onClick={hideNav} href="/login" name={t('تسجيل الدخول', 'Login')} />
                                </NotAuth>
                            </ul>
                            <div id="navbars" className="flex items-center gap-4">
                                <Button onClick={toggleLanguage} icon={<FontAwesomeIcon size='2x' icon={faEarth} />} />
                                <button id='n1avbars' className='2xl:hidden' onClick={() => setShowNav(!showNav)}>
                                    <FontAwesomeIcon icon={faNavicon} size="2x" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                {props.children}
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} ref={toTopBtn} className="btn to-top hidden"><FontAwesomeIcon icon={faArrowUp} /></button>
            <footer className="bg-black text-white p-4 text-center">
                All Copyrights &copy; reserved for Dr. Maha Ahmed Qassem & Eng. Habib Gamal {(new Date()).getFullYear()}
            </footer>
        </div>
    )
}

