export const hostname = (url?: string) => {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

/** Minimal browser chrome for screenshot "windows": three dots + the project's domain. */
export const BrowserBar = ({ url, compact = false }: { url?: string; compact?: boolean }) => (
  <div className={`flex shrink-0 items-center gap-2 border-b border-ink/5 bg-white/90 px-3 ${compact ? "h-6" : "h-7"}`}>
    <span className="flex gap-1.5">
      <i className="h-2 w-2 rounded-full bg-ink-200" />
      <i className="h-2 w-2 rounded-full bg-ink-200" />
      <i className="h-2 w-2 rounded-full bg-ink-200" />
    </span>
    {url && (
      <span className="ml-1 truncate rounded-md bg-ink-50 px-2 py-0.5 font-label text-[10px] tracking-[0.06em] text-ink-500">
        {hostname(url)}
      </span>
    )}
  </div>
);
