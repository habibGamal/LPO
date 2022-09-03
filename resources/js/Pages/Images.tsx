import { motion } from "framer-motion"
import useTranslate from "../Hooks/useTranslate";
import React from "react";
export default function Images() {
    const t = useTranslate();
    return (
        <div className="container">
            <h2 className="text-3xl lg:text-4xl m-16 text-center font-bold uppercase">{t('صور توضيحية','Images')}</h2>
            <div className="grid grid-cols-auto gap-6 md:grid-cols-2 items-start">
                <Card
                    src="./images/piano1.jpg"
                    title="البيانو الكبير ( الجراند ): "
                    text="تكون الأوتار والإطار في هذا النوع من البيانوهات أفقية موازية للأرض تخرج أوتارها من لوحة الملامس، ويقع الهيكل الآلي تحت الأوتار"
                />
                <Card
                    src="./images/piano2.jpg"
                    title="البيانو القائم: "
                    text="يُسمَّى كذلك البيانو العموديّ، وهو أقلُّ حجمًا من البيانو الكبير، كما أنَّ أنغامه أقلّ جودةً من البيانو الكبير"
                />
                <Card
                    src="./images/piano3.png"
                    title="البيانو الكهربائي ( الإلكتريك ): "
                    text="ويسمى أيضاً الإلكتروني الرقمي يستعَمل لموسيقى الجاز والروك. وبعض أنواع البيانو الإلكتروني ليست بها أوتار، بل تُصْدِر الصوت إلكترونيًّا. وهذا النوع من البيانو صغير الحجم"
                />
                <Card
                    src="./images/piano4.jpg"
                    title=" مكونات آلة البيانو من الداخل : "
                    text=""
                    list={[
                        'الأوتــار: وعددها مئتان وعشرون وترًا، طول كل وتر 20سم، مصنوعة من الفولاذ وكل مفتاح من الثمانية والثمانين يعطي نغمة مختلفة ونوتة موسيقية مختلفة',
                        'المطارق: من عدة مطارق خشبية صغيرة مغلفة بالصوف اللبادي لطرق الأوتار',
                        'مفاتيح ضبط الآلة: وهي عبارة عن مفاتيح معدنية يتم بواسطتها ضبط ودوزان الآلة',
                    ]}
                />
                <Card
                    src="./images/piano5.jpg"
                    title="دواس آلة البيانو ( البدال ) : "
                    text="وتقع في أسفل البيانو حيث إنّه يستخدمها العازف لعدّة أمور ونذكر منها"
                    list={[
                        'الدوّاسة اليمنى: يستطيع من خلالها العازف رفع ذبذبة الوتر (امتداد الرنين الصوتي للنغمات).',
                        'الدواسة الوسطى: يستطيع من خلالها العازف كتم صوت النغمات.',
                        'الدواسة اليسرى: يستطيع من خلالها تخفيف ذبذبة الوتر.'
                    ]}
                />
                <Card
                    src="./images/piano9.png"
                    title="شرح كيفية الجلوس الصحيح أمام لوحة المفاتيح وضبط كرسي آلة البيانو للطالب : "
                    text="توضيح مكان الجلوس على الكرسي في النصف الأول مع فرد الجزع والجلوس أمام نغمة دو الوسطي بعد توضيح مكانها وتكون القدم ثابتة مع تقدم القدم اليمني عن اليسري قليلاً وتكون اليد على استقامة واحدة مع الساعد، وتطبيق ذلك عملياً على كل طالب على حدى وبعد أن يجلس الطالب الجلسة الصحيحة يبدأ التوجيهه إلى طريقة وضع اليد الصحيح على لوحة المفاتيح بناء على ترقيم الأصابع الخمسة في اليدين كما هو موضح بالشكل"
                />
                <Card
                    src="./images/piano8.jpg"
                    title="كيفية وضع اليد بشـكل صـحيح على لوحة المفاتيح كما هو موضح بالشكل"
                    text=""
                />
                <Card
                    src="./images/piano7.gif"
                    title="ضبط يد الطالب علي سطح خشبي علي ان تكون اليد اخذه للشكل المستدير مع توضيح
                    ترقيم الاصابع في اليدين كما هو موضح بالشكل
                    "
                    text=""
                />
                <Card
                    src="./images/piano10.png"
                    title="التعرف على لوحة المفاتيح بمساحتها الصوتية وتحديد نغمـة دو الوسـطي كما هو موضح بالشكل"
                    text=""
                />
                <Card
                    src="./images/piano11.png"
                    title="التعرف علي المفاتيح السوداء عن طريق تقسيمها لمجمـوعتين كمـا هـو موضح بالشكل"
                    text=""
                />
            </div>
        </div>
    )
}

const Card = ({ src, title, text, list = [] }: { src: string, title: string, text: string, list?: string[] }) => (
    <motion.div initial={{ y: 300, opacity: 0, scale: 1 }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.05 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="card rounded-2xl shadow-lg overflow-hidden">
        <img className="border-b-2 border-main object-cover w-full h-8/12" src={src} alt="" />
        <p className="rtl p-4 font-sans"><span className="font-bold">{title}</span>{text}</p>
        <ul className="rtl p-4 pt-0 font-sans m-0 mx-4">
            {
                list.map(li => <li className="font-sans list-disc">{li}</li>)
            }
        </ul>
    </motion.div>
)
