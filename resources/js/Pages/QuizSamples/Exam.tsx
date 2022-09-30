import { FormEvent, useEffect, useState, useRef } from "react";
import React from "react";
import useTranslate from "../../Hooks/useTranslate";
import MultibleChoiceInput from "../../Components/MultibleChoiceInput"
import TrueFalseInput from "../../Components/TrueFalseInput"
import { Inertia } from "@inertiajs/inertia";
import { Popconfirm } from "antd";
import { usePage } from "@inertiajs/inertia-react";
const choiceQuestions = [
    {
        q: "كم عدد انواع البيانو؟",
        a: [
            'نوعان',
            '3 انواع',
            '4 انواع',
        ]
    },
    {
        q: "من اخترع ألة البيانو؟",
        a: [
            'بارتولوميو كريستوفوري',
            'أندريا أماتي',
            'كيرل داميان',
        ]
    },
    {
        q: "متى اخترع البيانو؟ ",
        a: [
            '1800',
            '1700',
            '1750',
        ]
    },
    {
        q: "على أي مفاتيح تكتب نوتة البيانو",
        a: [
            'صول، فا',
            'صول، دو تينور',
            'فا، دو تينور',
        ]
    },
    {
        q: "كم عدد أكتافات البيانو",
        a: [
            'ستة أكتافات',
            'سبعة أكتافات',
            'ثمانية أكتافات',
        ]
    },
    {
        q: "أوتار البيانو التي تكون على شكل مثلث عمودي تكون في",
        a: [
            'بيانو جراند',
            'بيانو ألكتروني',
            'بيانو قائم',
        ]
    },
    {
        q: "تحتوي معظم البيانو الحديث على لوحة مفاتيح مكونة من صف من",
        a: [
            '88 مفتاحاً',
            '77 مفتاحاً',
            '66 مفتاحاً',
        ]
    },
]
const TFQuestions = [
    'السلم الموسيقي: هو مجموعة من النوتات الموسيقية مرتبة حسب التردد الأساسي أو طبقة الصوت، يتفرع إلى سبع نغمات ',
    'ليس من الضروري أن يتم العزف على البيانو بأطراف الأصابع',
    'إصبع الإبهام بحيث يأخذ الرقم 1 في اليد اليمنى والرقم 5 في اليد اليسرى',
    'يتكون المدرج الموسيقي من خمسة خطوط أفقية وأربعة مسافات ',
    'تعزف اليد اليمنى النوتات الموسيقية المكتوبة على مدرج صول واليد اليسرى النوتات الموسيقية المكتوبة على مدرج فا  ',
    'تكتب نغمة دو الوسطى أعلى مدرج صول وأسفل مدرج فا ',
    'الخط الثاني في مدرج صول يسمى مي',
    'من شروط الجلسة الصحيحة لآلة البيانو الجلوس على حافة مقعد البيانو ومحاذاة الرأس والكتف',
]
export default function Exam({ wrongAns,examType }: { wrongAns?: { [key: string]: string },examType:string }) {
    const form = useRef(null);
    const errors = usePage().props.errors;
    const isExamSubmited = wrongAns ? true : false;
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(form.current!);
        formData.append('exam_type', examType);
        if (!isExamSubmited) {
            Inertia.post('/quiz/check-exam', formData, { preserveScroll: true });
        }
    }
    const validForm = Object.keys(errors).length > 0;

    return (
        <form ref={form} className="container relative rtl" onSubmit={onSubmit} >
            <h2 className="page-title">Quiz 1</h2>
            <input required type="text" name="name" id="name" placeholder="ادخل اسمك" className="rounded bg-gray-50 border  focus-within:outline-second mb-8 text-xl p-4" />
            <div className="content grid grid-cols-auto lg:grid-cols-2 items-start gap-8">
                {
                    choiceQuestions.map(({ q, a }, key) => <ChoiceQ key={key} id={`q-${key}`} question={q} choices={a} correction={wrongAns?.[`q-${key}`]} />)
                }
                {
                    TFQuestions.map((q, key) => <TFQ key={key} id={`q-${key + choiceQuestions.length}`} question={q} correction={wrongAns?.[`q-${key + choiceQuestions.length}`]} />)
                }
            </div>
            {
                wrongAns &&
                <div className="rounded shadow p-4 bg-second  my-8 w-fit mx-auto">
                    <h4 className="text-xl text-white">درجتك : {15 - Object.keys(wrongAns).length}/15 </h4>
                </div>
            }
            {
                validForm &&
                <p className="text-center text-red-600">
                    *برجاء ادخال الاسم والاجابة عن كل الاسئلة
                </p>
            }
            <button className="block mx-auto my-8 btn">Submit</button>
        </form>
    )
}

const ChoiceQ = ({ question, id, choices, correction = undefined }: { question: string, id: string, choices: string[], correction?: string }) => {
    return (
        <div>
            <p className={`${correction ? '!border-red-600 border' : ''} question`}>{question}</p>
            <MultibleChoiceInput
                id={id}
                choices={choices}
                correction={correction}
            />
        </div>
    )
}
const TFQ = ({ question, id, correction = undefined }: { question: string, id: string, correction?: string }) => {
    return (
        <div>
            <p className={`${correction ? '!border-red-600 border' : ''} question`}>{question}</p>
            <TrueFalseInput id={id} correction={correction} />
        </div>
    )
}
