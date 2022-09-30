import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react'
interface DataType {
    key: string;
    name: string;
    score: string;
    examType: string;
    at: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Score From(15)',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Exam Type',
      dataIndex: 'examType',
      key: 'examType',
    },
    {
      title: 'Date',
      dataIndex: 'at',
      key: 'at',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      score: '32',
      examType: 'pre-exam',
      at:'13/7'
    },
    {
      key: '1',
      name: 'John Brown',
      score: '32',
      examType: 'pre-exam',
      at:'13/7'
    },
    {
      key: '1',
      name: 'John Brown',
      score: '32',
      examType: 'pre-exam',
      at:'13/7'
    },
  ];

export default function DisplayScores({ scores }: { scores: { id:number, name: string, score: string, created_at: string, exam_type: string }[] }) {
    const data = scores.map(score=>({
        key:score.id.toString(),
        name: score.name,
        score: score.score,
        examType: score.exam_type,
        at:score.created_at.split('T')[0],
    }))
    // console.log(scores);

    return (
        <div className="container">
            <Table className="mt-4" columns={columns} dataSource={data} pagination={false} />
        </div>
    )
}
