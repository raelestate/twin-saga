import { useCallback, useEffect, useState } from 'react';
import type { ChangelogService } from '../services/changelogServices';
import type { ChangelogCard } from '../../../types/index';

export function useChangelog(service: ChangelogService) {
  const [items, setItems] = useState<ChangelogCard[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchPage = useCallback(
    async (currentCursor?: string) => {
      setLoading(true);
      const res = await service.fetch(currentCursor);
      setItems(res.data);
      setCursor(res.nextCursor);
      setHasMore(res.nextCursor !== null);
      setLoading(false);
    },
    [service],
  );

  const next = useCallback(async () => {
    if (!hasMore || loading) return;
    if (cursor) setHistory(prev => [...prev, cursor]);
    await fetchPage(cursor ?? undefined);
    setPage(prev => prev + 1);
  }, [cursor, fetchPage, hasMore, loading]);

  const prev = useCallback(async () => {
    if (history.length === 0 || loading) return;
    const prevCursor = history[history.length - 1];
    setHistory(prev => prev.slice(0, -1));
    await fetchPage(prevCursor);
    setPage(prev => Math.max(prev - 1, 1));
  }, [history, fetchPage, loading]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  return { items, next, prev, loading, hasMore, page };
}
