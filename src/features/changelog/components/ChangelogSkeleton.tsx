export function ChangelogSkeleton() {
  return (
    <div className="h-80 w-full rounded-xl bg-gray-700 animate-pulse relative overflow-hidden shadow-lg">
      <div className="absolute top-0 left-0 w-full h-40 bg-gray-600 animate-pulse" />
      <div className="p-4 flex flex-col gap-2 mt-44">
        <div className="h-5 w-3/4 bg-gray-600 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-600 rounded animate-pulse" />
        <div className="h-10 w-full mt-auto bg-yellow-500 rounded animate-pulse" />
      </div>
    </div>
  );
}
