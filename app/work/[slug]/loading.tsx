export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-28 md:pt-36 pb-16 md:pb-20 px-6 md:px-16">
        <div className="container mx-auto space-y-8">
          {/* Skeleton for back button */}
          <div className="h-6 w-32 bg-foreground/5 rounded animate-pulse" />
          
          {/* Skeleton for title */}
          <div className="space-y-4">
            <div className="h-16 md:h-24 w-3/4 bg-foreground/5 rounded animate-pulse" />
            <div className="h-8 w-1/2 bg-foreground/5 rounded animate-pulse" />
          </div>
          
          {/* Skeleton for hero image */}
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-[2rem] bg-foreground/5 animate-pulse" />
        </div>
      </div>
      
      {/* Skeleton for content */}
      <div className="px-6 md:px-16 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="h-8 w-48 bg-foreground/5 rounded animate-pulse" />
                  <div className="h-4 w-full bg-foreground/5 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-foreground/5 rounded animate-pulse" />
                </div>
              ))}
            </div>
            <div className="lg:col-span-5">
              <div className="h-64 bg-foreground/5 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

