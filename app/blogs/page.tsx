import BlogHero from '@/components/blogs/BlogHero';

export const revalidate = 30;

export default function Blogs() {
  return (
    <div className="min-h-screen bg-slate-300 dark:bg-slate-800">
      <BlogHero />
    </div>
  );
}
