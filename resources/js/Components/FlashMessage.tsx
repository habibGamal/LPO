import { Alert } from 'antd'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext, useEffect } from 'react'
import { ContextApi } from '../Contexts/AppContext'

export default function FlashMessage() {
    const [{ flashMessage }, setAppState] = useContext(ContextApi)!;
    useEffect(()=>{
        if(flashMessage !== null){
            const timeout = setTimeout(()=>{
                setAppState(
                    state => ({
                        ...state,
                        flashMessage:null,
                    })
                );
                clearTimeout(timeout);
            },3000)
        }
    },[flashMessage])
    return (
        <AnimatePresence>
            {flashMessage && (
                <motion.div
                    initial={{ x:"-50%", y: -350, opacity: 0 }}
                    transition={{ duration: .5, delay: 0, type: 'spring' }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -350, opacity: 0 }}
                    className="fixed top-8 left-1/2 z-50 select-none">
                    <Alert message={flashMessage?.message} type={flashMessage?.type} showIcon />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
