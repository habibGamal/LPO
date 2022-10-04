import { motion } from "framer-motion"
import useTranslate from "../Hooks/useTranslate";
import React from "react";
export default function Images() {
    const t = useTranslate();
    return (
        <div className="container lg:text-align-inherit">
            <h2 className="text-3xl lg:text-4xl m-16 text-center font-bold uppercase">{t('صور توضيحية', 'Images')}</h2>
            <div className="grid grid-cols-auto gap-6 md:grid-cols-2 items-start">
                <Card
                    src="./images/piano1.jpg"
                    title={t('البيانو الكبير ( الجراند ): ', 'Grand piano')}
                    text={t('تكون الأوتار والإطار في هذا النوع من البيانوهات أفقية موازية للأرض تخرج أوتارها من لوحة الملامس، ويقع الهيكل الآلي تحت الأوتار', 'The strings and frame in this type of pianos are horizontal, parallel to the ground, and the strings come out of the touchpad, and the mechanical structure is located under the strings')}
                />
                <Card
                    src="./images/piano2.jpg"
                    title={t('البيانو القائم: ', 'Standing piano')}
                    text={t('يُسمَّى كذلك البيانو العموديّ، وهو أقلُّ حجمًا من البيانو الكبير، كما أنَّ أنغامه أقلّ جودةً من البيانو الكبير', 'Also called the vertical piano, it is smaller than the grand piano, and its melodies are lower than the grand piano')}
                />
                <Card
                    src="./images/piano3.png"
                    title={t('البيانو الكهربائي ( الإلكتريك ): ', 'Electric piano (electric)')}
                    text={t('ويسمى أيضاً الإلكتروني الرقمي يستعَمل لموسيقى الجاز والروك. وبعض أنواع البيانو الإلكتروني ليست بها أوتار، بل تُصْدِر الصوت إلكترونيًّا. وهذا النوع من البيانو صغير الحجم', ' It is also called electronic digital, used for jazz and rock music. Some types of electronic piano do not have strings, but rather produce the sound electronically. This type of piano is small in size')}
                />
                <Card
                    src="./images/piano4.jpg"
                    title={t(' مكونات آلة البيانو من الداخل : ', 'Interior components of the piano')}
                    text=""
                    list={[
                        t('الأوتــار: وعددها مئتان وعشرون وترًا، طول كل وتر 20سم، مصنوعة من الفولاذ وكل مفتاح من الثمانية والثمانين يعطي نغمة مختلفة ونوتة موسيقية مختلفة', 'Strings: There are two hundred and twenty strings, each string is 20 cm long, made of steel, and each key of the eighty-eight gives a different tone and a different musical note'),
                        t('المطارق: من عدة مطارق خشبية صغيرة مغلفة بالصوف اللبادي لطرق الأوتار', 'Hammers: From several small wooden hammers coated with felt wool to hammer the strings'),
                        t('مفاتيح ضبط الآلة: وهي عبارة عن مفاتيح معدنية يتم بواسطتها ضبط ودوزان الآلة', 'Machine adjustment keys: They are metal keys by which the machine is adjusted and balanced'),
                    ]}
                />
                <Card
                    src="./images/piano5.jpg"
                    title={t('دواس آلة البيانو ( البدال ) : ', 'Piano Pedal')}
                    text={t('وتقع في أسفل البيانو حيث إنّه يستخدمها العازف لعدّة أمور ونذكر منها', ' It is located at the bottom of the piano as the player uses it for several things, including')}
                    list={[
                        t('الدوّاسة اليمنى: يستطيع من خلالها العازف رفع ذبذبة الوتر (امتداد الرنين الصوتي للنغمات).', 'Right pedal: the player can raise the chord\'s frequency (the extension of the vocal resonance of notes)'),
                        t('الدواسة الوسطى: يستطيع من خلالها العازف كتم صوت النغمات.', 'Middle Pedal: The player can mute the notes'),
                        t('الدواسة اليسرى: يستطيع من خلالها تخفيف ذبذبة الوتر.', 'Left pedal: It can reduce the vibration of the string')
                    ]}
                />
                <Card
                    src="./images/piano6.jpg"
                    title={t('شرح كيفية الجلوس الصحيح أمام لوحة المفاتيح وضبط كرسي آلة البيانو للطالب : ', 'Explanation of how to sit correctly in front of the keyboard and adjust the piano chair for the student:')}
                    text={t('توضيح مكان الجلوس على الكرسي في النصف الأول مع فرد الجزع والجلوس أمام نغمة دو الوسطي بعد توضيح مكانها وتكون القدم ثابتة مع تقدم القدم اليمني عن اليسري قليلاً وتكون اليد على استقامة واحدة مع الساعد، وتطبيق ذلك عملياً على كل طالب على حدى وبعد أن يجلس الطالب الجلسة الصحيحة يبدأ التوجيهه إلى طريقة وضع اليد الصحيح على لوحة المفاتيح بناء على ترقيم الأصابع الخمسة في اليدين كما هو موضح بالشكل', 'Clarify where to sit on the chair in the first half with the onyx individual and sit in front of the middle du tone after clarifying its place and the foot is fixed with the right foot progressing slightly from the left and the hand is straight and one with the forearm, And applying this practically to each student separately, and after the student sits in the correct session, he begins to be instructed on how to place the right hand on the keyboard based on the numbering of the five fingers on the hands, as shown in the figure')}
                />
                <Card
                    src="./images/piano8.jpg"
                    title={t('كيفية وضع اليد بشـكل صـحيح على لوحة المفاتيح كما هو موضح بالشكل', 'How to correctly place the hand on the keyboard as shown in the figure')}
                    text=""
                />
                <Card
                    src="./images/piano7.gif"
                    title={t('ضبط يد الطالب علي سطح خشبي علي ان تكون اليد اخذه للشكل المستدير مع توضيح ترقيم الاصابع في اليدين كما هو موضح بالشكل ', 'Adjusting the student’s hand on a wooden surface so that the hand takes a round shape, with the numbering of the fingers on the hands as shown in the figure')}
                    text=""
                />
                <Card
                    src="./images/piano10.png"
                    title={t('التعرف على لوحة المفاتيح بمساحتها الصوتية وتحديد نغمـة دو الوسـطي كما هو موضح بالشكل', 'Identifying the keyboard with its sound area and determining the middle du tone as shown in the figure')}
                    text=""
                />
                <Card
                    src="./images/piano11.png"
                    title={t('التعرف علي المفاتيح السوداء عن طريق تقسيمها لمجمـوعتين كمـا هـو موضح بالشكل', 'Identify the black keys by dividing them into two groups as shown in the figure')}
                    text=""
                />
            </div>
        </div>
    )
}

const Card = ({ src, title, text, list = [] }: { src: string, title: string, text: string, list?: string[] }) => (
    <motion.div initial={{ y: 300, opacity: 0, scale: 1 }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.05 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="card rounded-2xl shadow-lg overflow-hidden">
        <img className="border-b-2 border-main object-cover w-full h-8/12" src={src} alt="" />
        <p className=" p-4 font-sans"><span className="font-bold">{title}</span>{text}</p>
        <ul className=" p-4 pt-0 font-sans m-0 mx-4">
            {
                list.map(li => <li className="font-sans list-disc">{li}</li>)
            }
        </ul>
    </motion.div>
)
