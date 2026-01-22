import type { ChangelogResponse } from "../../../types";


export interface ChangelogService {
    fetch(cursor?: string): Promise<ChangelogResponse>;
}


export class CmsChangelogService implements ChangelogService {
    async fetch(cursor?: string): Promise<ChangelogResponse> {
        const params = cursor ? `?cursor=${cursor}` : '';
        const res = await fetch(`/api/changelogs${params}`);


        if (!res.ok) throw new Error('Failed to fetch changelogs');


        return res.json();
    }
}