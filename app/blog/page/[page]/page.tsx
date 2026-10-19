import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { blogPosts } from '../../../data';
import { BlogListing, PAGE_SIZE } from '../../blog-listing';

const pageCount = Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE));

export function generateStaticParams() {
  // Page 1 permanently resolves to the canonical /blog index.
  return Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => ({ page: String(index + 2) }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const number = Number(page);
  if (!Number.isInteger(number) || number < 2 || number > pageCount) return { robots: { index: false, follow: false } };
  return {
    title: `Blog, page ${number}`,
    description: `Guides for planning Philippines-based staffing, page ${number}.`,
    alternates: { canonical: `/blog/page/${number}` },
  };
}

export default async function NumberedBlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const number = Number(page);
  if (number === 1) permanentRedirect('/blog');
  if (!Number.isInteger(number) || number < 2 || number > pageCount) notFound();
  return <BlogListing page={number} />;
}
