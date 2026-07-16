import { Play } from 'lucide-react'

export function Mock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="flex items-center gap-1.5 border-b border-border p-4">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
      </div>
      <div className="flex">
        <aside className="hidden w-28 shrink-0 space-y-3 border-r border-border p-4 sm:block">
          <div className="h-2 w-full rounded bg-accent/40" />
          <div className="h-2 w-4/5 rounded bg-border" />
          <div className="h-2 w-full rounded bg-border" />
          <div className="h-2 w-3/5 rounded bg-border" />
          <div className="h-2 w-4/5 rounded bg-border" />
        </aside>
        <div className="flex-1 space-y-4 p-4">
          <div className="flex aspect-video items-center justify-center rounded-lg bg-background">
            <span className="flex size-14 items-center justify-center rounded-full bg-accent text-background">
              <Play size={22} aria-hidden="true" className="translate-x-0.5" />
            </span>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 rounded bg-border" />
            <div className="h-2 w-1/2 rounded bg-border" />
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded bg-border">
            <div className="h-full w-2/3 rounded bg-accent" />
          </div>
        </div>
      </div>
    </div>
  )
}
