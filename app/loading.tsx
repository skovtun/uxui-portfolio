export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest">
          Loading...
        </p>
      </div>
    </div>
  );
}

