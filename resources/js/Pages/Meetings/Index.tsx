import { Meeting as MeetingModel, MeetingDB } from "../../Models/Meeting"
import { motion } from "framer-motion"
import React from "react";
import { Link } from "@inertiajs/inertia-react";
import useTranslate from "../../Hooks/useTranslate";
export default function Index({ meetingsDB }: { meetingsDB: MeetingDB[] }) {
    const meetings = meetingsDB.map(meeting => new MeetingModel(meeting));
    const t = useTranslate();
    return (
        <>
            <section className="bg-ov-white">
                <div className="container lg:py-16 py-4 grid grid-rows-auto gap-4 text-center lg:text-align-inherit lg:grid-cols-2 items-center justify-between">
                    <div>
                        <motion.h3 initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8  font-bold uppercase">
                            {t('جلسات', 'zoom video')} <br /> <span className="highlight-header"> {t('زووم', 'conferencing')}</span>
                        </motion.h3>
                        <motion.p initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, delay: .5, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-xl font-[500]">
                            {
                                t(
                                    'ZOOM Cloud Meetings هو التطبيق المثالي لإجراء محادثات فيديو مهمة في مكان العمل. تم تصميم هذا التطبيق خصيصًا لإدارة الاجتماعات اليومية بطريقة فعالة ومنظمة ، دون القلق بشأن الجودة. بفضل هذا التطبيق ، سيكون لديك محادثات فيديو احترافية بغض النظر عن مكان وجودك. إحدى الميزات التي تميز ZOOM Cloud Meetings هي أنه يمنحك دفتر يوميات يمكّنك من جدولة اجتماعاتك بإحكام. يمكنك أيضًا إضافة إشعارات لتذكيرك بالدردشة المرئية المباشرة من هذه المجلة حتى تتمكن من المتابعة إلى اجتماعاتك دون تعقيدات. عند إجراء محادثة فيديو ، يمكنك استخدام الكاميرا الأمامية أو الخلفية لجهازك ، كما يمكنك تشغيل الميكروفون أو إيقاف تشغيله ، والتعديلات الأساسية الأخرى للحصول على أفضل نتيجة ممكنة. يمكنك أيضًا رؤية اسم الشخص الذي ستلتقي به وحتى تسجيل تفاصيل الاجتماع. يمكنك دعوة أشخاص آخرين إلى اجتماعاتك برابط واحد ، أو برنامج عن بعد مع مستخدمين آخرين تريد التواصل معهم ، وحتى تقييد الوصول إلى اجتماعاتك. يعد ZOOM Cloud Meetings ، باختصار ، تطبيقًا مثاليًا لإدارة الأعمال دون القلق بشأن جودتها أو جودتها.',
                                    'ZOOM Cloud Meetings is the perfect app for making important workplace video chats. This application is specially designed to manage daily meetings in an efficient and organized manner, without worrying about quality. Thanks to this application, you will have professional video chats no matter where you are. One of the features that distinguishes ZOOM Cloud Meetings is that it gives you a diary that enables you to schedule your meetings tightly. You can also add notifications reminding you to video chat live from this journal so you can proceed to your meetings without complications.',
                                )
                            }
                        </motion.p>
                    </div>
                    <div className="h-[400px]">
                        <motion.img src="./images/zoom_home.png" initial={{ x: 300, opacity: 0, scale: 1 }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.05 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="h-full w-full object-contain mx-auto" alt="" />
                    </div>
                </div>
            </section>
            <section className="container my-8 grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    meetings.map(meeting => <Meeting key={meeting.id} meeting={meeting} />)
                }
            </section>
        </>
    )
}

const Meeting = ({ meeting }: { meeting: MeetingModel }) => (
    <div className="meeting relative cursor-pointer border-4 border-second rounded-lg shadow-xl p-4">
        <span className="block absolute top-0 left-12 bg-main p-2 text-white text-xl rounded-b">{meeting.year}</span>
        <h4 className=" text-4xl sm:text-5xl lg:text-6xl  font-normal text-center py-16 border-b-2 border-main">@ {meeting.month} / {meeting.day}</h4>
        <div className="flex flex-wrap gap-4 justify-between m-4 items-center mb-0">
            <span className="text-xl font-bold block">{meeting.name}</span>
            {
                meeting.state !== 'ended' &&
                <a target="_blank" href={meeting.link} className="rounded bg-second hover:bg-main hover:text-white text-white shadow font-sans p-2">Join Meeting</a>
            }
            {
                meeting.state === 'ended' &&
                <Link href={`/meetings/${meeting.id}`} className="rounded bg-second hover:bg-main hover:text-white text-white shadow font-sans p-2">
                    Show Meeting
                </Link>
            }
        </div>
    </div>
)
