import { Link } from '@inertiajs/inertia-react'
import React, { useContext, useState } from 'react'
import useTranslate from './Hooks/useTranslate';
import { ContextApi } from './Contexts/AppContext';
import ToggleAuthLink from './Components/ToggleAuthLink';
import NavLink from './Components/NavLink';
import FlashMessage from './Components/FlashMessage';

export default function Layout(props: { children: JSX.Element }) {

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
        <div className={`${appState.lang === 'ar' && 'rtl'} App`}>
            <FlashMessage />
            <nav className="bg-ov-white ">
                <div className="container flex items-center justify-between py-2">
                    <img className='w-[50px] aspect-square' src='/images/logo.png' />
                    <ul className={`${showNav ? 'flex' : 'hidden'} nav 2xl:items-center items-start 2xl:flex gap-6 font-bold`}>
                        <NavLink onClick={hideNav} href="/" name={t('الرئيسية', 'Home')} />
                        <NavLink onClick={hideNav} href="/about" name={t('عنا', 'About')} />
                        <NavLink onClick={hideNav} href="/images_show" name={t('الصور', 'Images')} />
                        <NavLink onClick={hideNav} href="/books" name={t('المواد', 'Material')} />
                        <NavLink onClick={hideNav} href="/articles" name={t('المقالات', 'Articles')} />
                        <NavLink onClick={hideNav} href="/contact" name={t('تواصل معنا', 'Contact')} />
                        <NavLink onClick={hideNav} href="/quiz" name={t('الامتحانات', 'Quiz')} />
                        <NavLink onClick={hideNav} href="/meetings" name={t('جلسات زووم', 'Zoom Meetings')} />
                        <NavLink onClick={hideNav} href="/about-program" name={t('عن البرنامج', 'About Program')} />
                        <NavLink onClick={hideNav} href="/dashboard" name={t('عن البرنامج', 'Dashboard')} />
                        <ToggleAuthLink />
                        <li onClick={toggleLanguage} className="text-lg font-open-sans rounded border-second border px-1 hover:bg-second hover:text-white cursor-pointer transition-colors">
                            {
                                appState.lang === 'ar' ? 'English' : 'Arabic'
                            }
                        </li>
                    </ul>
                    <button className='2xl:hidden' onClick={() => setShowNav(!showNav)}>
                        {/* <FontAwesomeIcon icon={faNavicon} size="2x" /> */}
                    </button>
                </div>
            </nav>
            {props.children}
        </div>
    )
}

