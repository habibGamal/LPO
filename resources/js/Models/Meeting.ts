export type MeetingDB = {
    id: number;
    name: string;
    link: string;
    state: string;
    date: string;
    assets: string;
}
export class Meeting {
    public id: number;
    public name: string;
    public link: string;
    public state: string;
    public date: string;
    private _assets: string;
    constructor(meetingDB: MeetingDB) {
        this.id = meetingDB.id;
        this.name = meetingDB.name;
        this.link = meetingDB.link;
        this.state = meetingDB.state;
        this.date = meetingDB.date;
        this._assets = meetingDB.assets;
    };

    public get assets() {
        return JSON.parse(this._assets) as string[];
    }
    public get year() {
        return this.date.split('-')[0];
    }
    public get month() {
        return this.date.split('-')[1];
    }
    public get day() {
        return this.date.split('-')[2];
    }
}
