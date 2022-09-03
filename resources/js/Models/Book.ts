export type BookDB = {
    id: number;
    name: string;
    cover: string;
    pdf: string;
    videos: string;
}
export class Book {
    public id: number;
    public name: string;
    private _cover: string;
    public pdf: string;
    private _videos: string;
    constructor(bookDB: BookDB) {
        this.id = bookDB.id;
        this.name = bookDB.name;
        this._cover = bookDB.cover;
        this.pdf = bookDB.pdf;
        this._videos = bookDB.videos;
    };
    public get videos() {
        const rawVideo: string[][] = JSON.parse(this._videos);
        return rawVideo.map(video => ({ name: video[0], link: video[1] }));
    }
    public get coverName() {
        return this._cover
    }
    public get cover() {
        return '/storage/images/' + this._cover;
    }
}
