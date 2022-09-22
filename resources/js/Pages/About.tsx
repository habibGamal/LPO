import React from "react"
import { motion } from 'framer-motion'

export default function About() {
    return (
        <div className="container rtl">
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
                نواتج التعلم المستهدفة من الموقع
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <Block
                    title="المعرفة والفهم"
                    sentences={[
                        'أن يتعرف الطالب على الجلسة الصحيحة ووضع اليدين علي الة البيانو',
                        'أن يتعرف الطالب على أساسيات العزف على آلة البيانو وقراءة النوتة الموسيقية',
                    ]}
                    delay={0}
                />
                <Block
                    title="المهارات الذهنية"
                    sentences={[
                        'القدرة على التأزر العضلي والتحكم في كلتا اليدين',
                        'القدرة على قرائة النغمات في المدرج الكبير في مفتاحين',
                        'القدرة على التأزر بين القراءة والعزف من خلال القراءة الوهلية',
                        'القدرة على التذكر (الفوتوغرافي - التحليلي - السمعى)',
                    ]}
                    delay={.2}
                />
                <Block
                    title="المهارات المهنية والعملية"
                    sentences={[
                        'القدرة على تقوية الأصابع الخمس لليدين وليونتها وخاصة الإبهام والأداء بشكل سليم',
                        'القدرة على أداء السلالم والأربيجات في حدود الأوكتاف الواحد في السلالم الكبيرة والصغيرة',
                        'القدرة على الأداء السليم للمقطوعات الموسيقية المقررة',
                    ]}
                    delay={.4}
                />
                <Block
                    title="المهارات العامة والقابلة للانتقال"
                    sentences={[
                        'توجيه اهتمامات الطلاب لهواية محببه إليهم مثل العزف على الآلات الموسيقية واستخدامها الاستخدام الأمثل',
                        'تبادل الثقة بالنفس لدي الطلاب من خلال عزف الآلة والتمكن من الأداء الجيد',
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
                محتويات الموقع
            </motion.h1>
            <div className="grid grid-cols-1 gap-8 ">
                <TableItem
                    title="تمارين تمهيدية للاصابع علي لوحة المفاتيح والجلسة الصحيحة من كتاب john Thomson"
                    s1="الأسلوب الصحيح للجلسة الصحيحية ووضع اليدين علي الة البيانو"
                    s2="انتقال اثر التعلم للجلسة الصحيحة ووضع اليدين للمواد التي يستخدم فيها عزف البيانو"
                    s3="تصحيح الجلسة الخاطئة ووضع اليدين الخاطئ"
                    delay={.2}
                />
                <TableItem
                    title="تمارين من كتاب Longo Book One A"
                    s1="اكساب المرونة العضلية للاصابع الخمس"
                    s2="انتقال اثر التعلم الي المواد الموسيقية الاخري"
                    s3="تطبيق المرونة العضلية في باقي بنود مقرر البيانو"
                    delay={.4}
                />
                <TableItem
                    title="تمارين من كتاب Bartok Vol 1"
                    s1="اكساب المرونة العضلية عن طريق اداء تمارين بسيطة"
                    s2="اكتساب المرونة والتحكم في الاداء"
                    s3="السيطرة علي الاداء العضلي والنغمي"
                    delay={.6}
                />

            </div>
        </div>
    )
}

const Block = ({ title, sentences, delay }: { title: string, sentences: string[], delay: number }) => (
    <div className="block">
        <motion.h2
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 1.3, delay: delay, type: 'spring' }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-3xl font-bold bg-gray-100 p-2 px-3 w-fit border-r-4 border-main"
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
);


const TableItem = ({ title, s1, s2, s3, delay }: { title: string, s1: string, s2: string, s3: string, delay: number }) => (
    <div className="block">
        <motion.h2
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: 1.3, delay: delay, type: 'spring' }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-3xl font-bold bg-gray-100 p-2 px-3 w-fit border-r-4 border-main"
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
                <span className="font-bold">المعارف الرئيسية : </span>{s1}
            </li>
            <li>
                <span className="font-bold">مهارات مهنية : </span>{s2}
            </li>
            <li>
                <span className="font-bold">مهارات عامة : </span>{s3}
            </li>
        </motion.ol>
    </div>
)


