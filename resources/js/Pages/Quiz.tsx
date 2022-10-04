import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Inertia } from '@inertiajs/inertia';
import React from 'react';
import useTranslate from '../Hooks/useTranslate';
export default function Quiz() {
    const t = useTranslate();
    return (
        <section className="bg-x-blue lg:py-16 py-4 text-white text-center">
            <div className="container max-w-[780px]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold uppercase mb-4">{t('نمازج امتحانات', 'Quiz Samples')}</h2>
                <p className="mb-8 text-xl">
                    {t(
                        'تعدّ الاختبارات وسيلة من الوسائل المهمّة المستخدمة في قياس وتقويم قدرات الطلاب، ومعرفة ما وصّل إليه مستواهم التحصيلي، ومن ناحية أخرى تساعد في معرفة مدى تحقق الأهداف السلوكية، أوالنواتج التعليميّة المطلوبة، وما يقوم به المعلم من نشاطات تعليمية، كمّا تساعد على رفع المستويات التحصيلية عند الطلاب، لهذا من الضروري أن تتّصف هذه الاختبارات بالكفاءة العالية في عملية القياس والتقويم، ويمكن الوصول لهذه الكفاءة، عن طريق إعداد اختبارات نموذجيّة، وصحيحة.',
                        'Tests are one of the important means used in measuring and evaluating students\' abilities, and knowing what their achievement level has reached. Students, for this it is necessary that these tests be characterized by high efficiency in the process of measurement and evaluation, and this efficiency can be reached, by preparing standard and correct tests.'
                    )}
                </p>
                <img src="/images/quiz.png" alt="" />
                <div className="flex flex-col gap-4 text-left mt-8">
                    <QuizComponent name={t('الامتحان القبلي', 'Pre-exam')} onClick={() => Inertia.get('/quiz/pre-exam')} />
                    <QuizComponent name={t('الامتحان البعدي', 'Post-exam')} onClick={() => Inertia.get('/quiz/post-exam')} />
                </div>
            </div>
        </section>
    )
}

const QuizComponent = ({ name, onClick }: { name: string, onClick: React.MouseEventHandler<HTMLDivElement> }) => {
    return (
        <div onClick={onClick} className="quiz cursor-pointer bg-second p-4 rounded-xl  flex flex-nowrap justify-between items-center">
            <p className="text-xl">{name}</p>
            <FontAwesomeIcon size='2x' icon={faArrowCircleRight} />
        </div>
    )
}
