import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import React from "react";
import useTranslate from "../Hooks/useTranslate";
import { Inertia } from "@inertiajs/inertia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Contact from "./Contact";
const NUMBER_OF_SLIDES = 3
export default function Home() {
    const [activeSlide, setSlide] = useState(1);
    const isSlideActive = (slideId: number) => activeSlide === slideId;
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(state => state < NUMBER_OF_SLIDES ? state + 1 : 1);

        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, [setSlide])
    const t = useTranslate();
    return (
        <>
            <header className="bg-transparent py-16 slider">
                <div className="slides">
                    <img className={`${isSlideActive(1) ? 'active' : ''}`} src="images/slider/1.jpg" alt="" />
                    <img className={`${isSlideActive(2) ? 'active' : ''} fix-position`} src="images/slider/2.jpg" alt="" />
                    <img className={`${isSlideActive(3) ? 'active' : ''}`} src="images/slider/3.jpg" alt="" />
                </div>
                <div className="container relative z-40">
                    <div className="flex items-center justify-center lg:justify-between">
                        <div className="flex flex-col text-center justify-center items-center mx-auto min-h-[550px] ">
                            <motion.p
                                initial={{ y: 350, opacity: 0 }}
                                transition={{ duration: 1.5, delay: 0, type: 'spring' }}
                                animate={{ y: 0, opacity: 1 }}
                                className="uppercase text-5xl text-white font-bold mb-12 leading-tight lg:text-6xl ">
                                learning <br /> <span className="text-main">piano online</span> <br /> education system
                            </motion.p>
                            <motion.button
                                initial={{ x: -350, opacity: 0 }}
                                transition={{ duration: 1.5, delay: .4, type: 'spring' }}
                                animate={{ x: 0, opacity: 1 }}
                                className="btn"
                                onClick={() => Inertia.get('/about')}>
                                Go
                            </motion.button>
                        </div>
                    </div>
                </div>
            </header>
            {/** zoom */}
            <section className="container py-16 grid grid-rows-auto gap-4 text-center lg:text-align-inherit lg:grid-cols-2 items-center">
                <div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3, type: 'spring' }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl mb-8 font-bold uppercase">{t('جلسات زووم', 'zoom video')} <br /> {t('', 'conferencing')}</motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        transition={{ duration: 2, delay: .5, type: 'spring' }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xl font-[500]">
                        {
                            t(
                                'ZOOM Cloud Meetings هو التطبيق المثالي لإجراء محادثات فيديو مهمة في مكان العمل. تم تصميم هذا التطبيق خصيصًا لإدارة الاجتماعات اليومية بطريقة فعالة ومنظمة ، دون القلق بشأن الجودة. بفضل هذا التطبيق ، سيكون لديك محادثات فيديو احترافية بغض النظر عن مكان وجودك. إحدى الميزات التي تميز ZOOM Cloud Meetings هي أنه يمنحك دفتر يوميات يمكّنك من جدولة اجتماعاتك بإحكام. يمكنك أيضًا إضافة إشعارات لتذكيرك بالدردشة المرئية المباشرة من هذه المجلة حتى تتمكن من المتابعة إلى اجتماعاتك دون تعقيدات. عند إجراء محادثة فيديو ، يمكنك استخدام الكاميرا الأمامية أو الخلفية لجهازك ، كما يمكنك تشغيل الميكروفون أو إيقاف تشغيله ، والتعديلات الأساسية الأخرى للحصول على أفضل نتيجة ممكنة. يمكنك أيضًا رؤية اسم الشخص الذي ستلتقي به وحتى تسجيل تفاصيل الاجتماع. يمكنك دعوة أشخاص آخرين إلى اجتماعاتك برابط واحد ، أو برنامج عن بعد مع مستخدمين آخرين تريد التواصل معهم ، وحتى تقييد الوصول إلى اجتماعاتك. يعد ZOOM Cloud Meetings ، باختصار ، تطبيقًا مثاليًا لإدارة الأعمال دون القلق بشأن جودتها أو جودتها.',
                                'ZOOM Cloud Meetings is the perfect app for making important workplace video chats. This application is specially designed to manage daily meetings in an efficient and organized manner, without worrying about quality. Thanks to this application, you will have professional video chats no matter where you are. One of the features that distinguishes ZOOM Cloud Meetings is that it gives you a diary that enables you to schedule your meetings tightly. You can also add notifications reminding you to video chat live from this journal so you can proceed to your meetings without complications.',
                            )
                        }
                    </motion.p>
                </div>
                <motion.img
                    initial={{ scale: 0 }}
                    transition={{ duration: 1, type: 'spring' }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    src="./images/zoom_home.png" alt="" />
            </section>
            {/** quiz samples */}
            <section className="bg-x-blue py-16 text-white text-center">
                <div className="container max-w-[780px]">
                    <motion.h2
                        initial={{ y: -300, opacity: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl text-white font-bold uppercase mb-4">
                        {t('نماذج امتحانات', 'Quiz Samples')}
                    </motion.h2>
                    <motion.p
                        initial={{ x: -300, opacity: 0 }}
                        transition={{ duration: 1, type: 'spring' }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-8 text-xl">
                        {t(
                            'تعدّ الاختبارات وسيلة من الوسائل المهمّة المستخدمة في قياس وتقويم قدرات الطلاب، ومعرفة ما وصّل إليه مستواهم التحصيلي، ومن ناحية أخرى تساعد في معرفة مدى تحقق الأهداف السلوكية، أوالنواتج التعليميّة المطلوبة، وما يقوم به المعلم من نشاطات تعليمية، كمّا تساعد على رفع المستويات التحصيلية عند الطلاب، لهذا من الضروري أن تتّصف هذه الاختبارات بالكفاءة العالية في عملية القياس والتقويم، ويمكن الوصول لهذه الكفاءة، عن طريق إعداد اختبارات نموذجيّة، وصحيحة.',
                            'Tests are one of the important means used in measuring and evaluating students\' abilities, and knowing what their achievement level has reached. Students, for this it is necessary that these tests be characterized by high efficiency in the process of measurement and evaluation, and this efficiency can be reached, by preparing standard and correct tests.'
                        )}
                    </motion.p>
                    <motion.img
                        initial={{ y: 300, opacity: 0, scale: 1 }}
                        transition={{ duration: 1, type: 'spring' }}
                        whileHover={{ scale: 1.1 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }} src="./images/quiz.png"
                        alt=""
                    />
                </div>
            </section>
            {/** assignments */}
            <Contact />
        </>
    )
}
