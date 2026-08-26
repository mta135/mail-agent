import { Data } from "@angular/router";

export interface Mail {

    id: string;

    to: string

    from: string;
    subject: string;
    body: string;
    read: boolean;
    folderId: string

    date: Date;

}