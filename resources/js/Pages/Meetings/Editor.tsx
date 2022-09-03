import React from "react";
import { Meeting as MeetingModel, MeetingDB } from "../../Models/Meeting";
import Meeting from "../../Components/Meeting";

export default function Editor({ meetingsDB }: { meetingsDB: MeetingDB[] }) {
    const meetings = meetingsDB.map(meeting => new MeetingModel(meeting));
    return (
        <div className="container my-16 flex flex-col gap-4">
            <Meeting />
            {
                meetings.map(meeting => <Meeting key={meeting.id} meeting={meeting} />)
            }
        </div>
    )
}
