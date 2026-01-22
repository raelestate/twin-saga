import changelogCards from '../../../components/data/ChangelogCards';
import type { ChangelogResponse } from '../../../types/index';
import type { ChangelogService } from './changelogServices';

const PAGE_SIZE = 4;

export class LocalChangelogService implements ChangelogService {
  async fetch(cursor?: string): Promise<ChangelogResponse> {
    const start = cursor ? Number(cursor) : 0;
    const end = start + PAGE_SIZE;
    const slice = changelogCards.slice(start, end);
    return {
      data: slice.map((card, index) => ({
        ...card,
        id: String(start + index),
      })),
      nextCursor: end < changelogCards.length ? String(end) : null,
    };
  }
}
