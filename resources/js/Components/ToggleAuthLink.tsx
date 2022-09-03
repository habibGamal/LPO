import { Link } from '@inertiajs/inertia-react';
import React, { useContext } from 'react'
import { ContextApi } from '../Contexts/AppContext';
import useTranslate from '../Hooks/useTranslate';
import NavLink from './NavLink';

export default function ToggleAuthLink() {
    const [appState, setAppState] = useContext(ContextApi)!;
    const logout = async () => {

    }
    const t = useTranslate();
    return (
        <>
            {appState.auth ?
                <>
                    <NavLink onClick={() => { }} href="/dashboard" name={t('لوحة التحكم', 'Dashboard')} />
                    <li><button onClick={logout}>{t('تسجيل الخروج', 'Logout')}</button></li>
                </>
                :
                <NavLink onClick={() => { }} href="/login" name={t('تسجيل الدخول', 'Login')} />
            }
        </>
    )
}
