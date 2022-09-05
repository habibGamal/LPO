import { Meeting as MeetingModel, MeetingDB } from '../../Models/Meeting';
import React from 'react';
export default function Single({ meetingDB }: { meetingDB: MeetingDB }) {
    const meeting = new MeetingModel(meetingDB);
    const displayAsset = (asset: string, i: number) => {
        const [name, extention] = asset.split('.');
        return (
            <div className="rounded shadow p-4 bg-gray-100">
                {extention === 'mp4' ?
                    <video className='w-full' key={i} controls>
                        <source src={`/storage/images/${asset}`} type="video/mp4" />
                    </video> :
                    <img key={i} src={`/storage/images/${asset}`} />
                }
            </div>
        )
    }
    return (
        <div className='container flex flex-col justify-center gap-4'>
            <h2 className="text-3xl lg:text-4xl m-16 text-center font-bold uppercase">{meeting.name}</h2>

            {
                meeting?.assets.map((asset, i) => displayAsset(asset, i))
            }
        </div>
    )
}
