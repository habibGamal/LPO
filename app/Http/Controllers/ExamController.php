<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function checking(Request $request)
    {
        $request->validate([
            "name" => "required|string",
            "q-0" => "required|string",
            "q-1" => "required|string",
            "q-2" => "required|string",
            "q-3" => "required|string",
            "q-4" => "required|string",
            "q-5" => "required|string",
            "q-6" => "required|string",
            "q-7" => "required|string",
            "q-8" => "required|string",
            "q-9" => "required|string",
            "q-10" => "required|string",
            "q-11" => "required|string",
            "q-12" => "required|string",
            "q-13" => "required|string",
            "q-14" => "required|string",
        ]);
        $RIGHT_ANS = [
            "q-0" => "q-0-a-1",
            "q-1" => "q-1-a-0",
            "q-2" => "q-2-a-1",
            "q-3" => "q-3-a-0",
            "q-4" => "q-4-a-1",
            "q-5" => "q-5-a-2",
            "q-6" => "q-6-a-0",
            "q-7" => "true",
            "q-8" => "false",
            "q-9" => "false",
            "q-10" => "true",
            "q-11" => "true",
            "q-12" => "false",
            "q-13" => "false",
            "q-14" => "true",
        ];
        $exam = $request->all();
        unset($exam['name']);
        unset($exam['exam_type']);
        $wrongAns = [];
        foreach ($exam as $q => $a) {
            if (array_key_exists($q, $RIGHT_ANS))
                if ($RIGHT_ANS[$q] !== $a)
                    $wrongAns[$q] = $RIGHT_ANS[$q];
        }
        Exam::create([
            'name' => $request->name,
            'score' => 15 - count($wrongAns),
            'exam_type' => $request->exam_type,
        ]);
        return Inertia::render('QuizSamples/Exam', [
            'examType'=> $request->exam_type,
            'wrongAns' => $wrongAns,
        ]);
    }
}
