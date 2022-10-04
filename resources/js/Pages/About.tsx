import React, { useContext } from "react"
import { motion } from 'framer-motion'
import useTranslate from "../Hooks/useTranslate";
import { ContextApi } from "../Contexts/AppContext";

export default function About() {
    const t = useTranslate();
    return (
        <div className="container lg:text-align-inherit">
            <div className="flex justify-center my-8">
                <div className="rounded-full w-48 aspect-square overflow-hidden border-2 border-solid border-white outline-3 outline-gray-200 outline">
                    <img className="w-full" src="./images/personal_photo.png" alt="" />
                </div>
            </div>
            <motion.h1
                initial={{ x: 350, opacity: 0 }}
                transition={{ duration: 1.3, delay: 0, type: 'spring' }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold font-sans m-4 mb-16 text-center">
                {
                    t(
                        'نواتج التعلم المستهدفة من الموقع',
                        'Targeted learning outcomes from the site'
                    )
                }
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <Block
                    title={t('المعرفة والفهم', 'knowledge and understanding')}
                    sentences={[
                        t('أن يتعرف الطالب على الجلسة الصحيحة ووضع اليدين علي الة البيانو', 'To familiarize the student with the correct sitting and placement of hands on the piano.'),
                        t('أن يتعرف الطالب على أساسيات العزف على آلة البيانو وقراءة النوتة الموسيقية', 'To familiarize the student with the basics of playing the piano and reading musical notes'),
                    ]}
                    delay={0}
                />
                <Block
                    title={t('المهارات الذهنية', 'mental skills')}
                    sentences={[
                        t('القدرة على التأزر العضلي والتحكم في كلتا اليدين', 'The ability to coordinate and control muscles in both hands'),
                        t('القدرة على قرائة النغمات في المدرج الكبير في مفتاحين', 'Ability to read tones in the grandstand in two keys'),
                        t('القدرة على التأزر بين القراءة والعزف من خلال القراءة الوهلية', 'The ability to synergize between reading and playing through imaginative reading'),
                        t('القدرة على التذكر (الفوتوغرافي - التحليلي - السمعى)', 'Ability to remember (Photographic - Analytical - Auditory)'),
                    ]}
                    delay={.2}
                />
                <Block
                    title={t('المهارات المهنية والعملية', 'Professional and practical skills')}
                    sentences={[
                        t('القدرة على تقوية الأصابع الخمس لليدين وليونتها وخاصة الإبهام والأداء بشكل سليم', 'The ability to strengthen the five fingers of the hands and their flexibility, especially the thumb, and to perform properly'),
                        t('القدرة على أداء السلالم والأربيجات في حدود الأوكتاف الواحد في السلالم الكبيرة والصغيرة', 'The ability to perform stairs and arpeggios within one octave on large and small stairs'),
                        t('القدرة على الأداء السليم للمقطوعات الموسيقية المقررة', 'The ability to properly perform the prescribed musical compositions'),
                    ]}
                    delay={.4}
                />
                <Block
                    title={t('المهارات العامة والقابلة للانتقال', 'General and transferable skills')}
                    sentences={[
                        t('توجيه اهتمامات الطلاب لهواية محببه إليهم مثل العزف على الآلات الموسيقية واستخدامها الاستخدام الأمثل', 'Directing students\' interests to a hobby they like, such as playing musical instruments and using them optimally'),
                        t('تبادل الثقة بالنفس لدي الطلاب من خلال عزف الآلة والتمكن من الأداء الجيد', 'Exchanging the students\' self-confidence by playing the instrument and being able to perform well'),
                    ]}
                    delay={.6}
                />
            </div>
            <motion.h1
                initial={{ x: 350, opacity: 0 }}
                transition={{ duration: 1.3, delay: .4, type: 'spring' }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold font-sans m-4 mb-16 text-center">
                {t('محتويات الموقع','Site contents')}
            </motion.h1>
            <div className="grid grid-cols-1 gap-8 ">
                <TableItem
                    title={t('تمارين تمهيدية للاصابع علي لوحة المفاتيح والجلسة الصحيحة من كتاب john Thomson','Introductory exercises for the fingers on the keyboard and the correct session from the book by John Thomson')}
                    s1={t('الأسلوب الصحيح للجلسة الصحيحية ووضع اليدين علي الة البيانو','The correct technique of the correct sitting and placing the hands on the piano')}
                    s2={t('انتقال اثر التعلم للجلسة الصحيحة ووضع اليدين للمواد التي يستخدم فيها عزف البيانو','transferring the effect of learning to the correct sitting and placing hands for the materials in which playing the piano is used')}
                    s3={t('تصحيح الجلسة الخاطئة ووضع اليدين الخاطئ','correcting the wrong sitting and the wrong position of the hands')}
                    delay={.2}
                />
                <TableItem
                    title={t('تمارين من كتاب Longo Book One A','Exercises from Longo Book One A')}
                    s1={t('اكساب المرونة العضلية للاصابع الخمس','Gaining muscle flexibility for the five fingers')}
                    s2={t('انتقال اثر التعلم الي المواد الموسيقية الاخري','transferring the impact of learning to other musical subjects')}
                    s3={t('تطبيق المرونة العضلية في باقي بنود مقرر البيانو','applying muscle flexibility in the rest of the piano course items')}
                    delay={.4}
                />
                <TableItem
                    title={t('تمارين من كتاب Bartok Vol 1','Exercises from the book Bartok Vol 1')}
                    s1={t('اكساب المرونة العضلية عن طريق اداء تمارين بسيطة','Gaining muscle flexibility by performing simple exercises')}
                    s2={t('اكتساب المرونة والتحكم في الاداء','Gaining flexibility and performance control')}
                    s3={t('السيطرة علي الاداء العضلي والنغمي','control of muscle and tonal performance')}
                    delay={.6}
                />

            </div>
        </div>
    )
}

const Block = ({ title, sentences, delay }: { title: string, sentences: string[], delay: number }) => {

    const [{ lang }] = useContext(ContextApi)!;
    return (
        <div className="block">
            <motion.h2
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 1.3, delay: delay, type: 'spring' }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={`font-sans text-3xl font-bold bg-gray-100 p-2 px-3 w-fit border-main ${lang === 'ar' ? 'border-r-4' : 'border-l-4'}`}
            >
                {title}
            </motion.h2>
            <motion.ol
                className="list-decimal m-6"
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 1.3, delay: delay + .1, type: 'spring' }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                {
                    sentences.map(
                        (sentence, i) =>
                            <li key={i}>
                                {sentence}
                            </li>
                    )
                }
            </motion.ol>
        </div>
    )
};


const TableItem = ({ title, s1, s2, s3, delay }: { title: string, s1: string, s2: string, s3: string, delay: number }) => {

    const [{ lang }, setAppState] = useContext(ContextApi)!;
    const t = useTranslate();
    return (
        <div className="block">
            <motion.h2
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 1.3, delay: delay, type: 'spring' }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className={`font-sans text-3xl font-bold bg-gray-100 p-2 px-3 w-fit border-main ${lang === 'ar' ? 'border-r-4' : 'border-l-4'}`}
            >
                {title}
            </motion.h2>
            <motion.ol
                className="list-decimal m-6"
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 1.3, delay: delay + .1, type: 'spring' }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <li>
                    <span className="font-bold">{t('المعارف الرئيسية','Key knowledge')} : </span>{s1}
                </li>
                <li>
                    <span className="font-bold">{t('مهارات مهنية','Professional Skills')} : </span>{s2}
                </li>
                <li>
                    <span className="font-bold">{t('مهارات عامة','General skills')} : </span>{s3}
                </li>
            </motion.ol>
        </div>
    )
}


