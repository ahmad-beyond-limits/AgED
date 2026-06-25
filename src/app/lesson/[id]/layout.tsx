export function generateStaticParams() {
  // Generate static pages for lesson IDs 1 through 10
  return Array.from({ length: 10 }).map((_, i) => ({
    id: String(i + 1),
  }));
}

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
