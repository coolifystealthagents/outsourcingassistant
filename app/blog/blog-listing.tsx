import Image from 'next/image';
import { FeaturedComparison } from './FeaturedComparison';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../components';
import { blogPosts } from '../data';
import { indexImages, resolveBlogImage } from '../editorial-images';
import styles from '../editorial-index.module.css';

const PAGE_SIZE = 20;
const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', {
  month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
}).format(new Date(`${date}T00:00:00Z`));

export function BlogListing({ page = 1 }: { page?: number }) {
  const total = Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE));
  if (page < 1 || page > total) notFound();
  const posts = blogPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  return <>
    <Header />
    <main className="fleet-main">
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div><p className="eyebrow">Blog library</p><h1>Practical guides for Philippines-based staffing</h1><p>Role planning, onboarding, access, and operating guidance for teams working with specialists in the Philippines. Every guide includes a publication date, reading time, and a clear topic signal.</p></div>
          <div className={styles.heroMedia}><Image src={indexImages.blog.url} alt={indexImages.blog.alt} fill priority sizes="(max-width: 720px) 100vw, 50vw" /></div>
        </div>
      </section>
      <section className={styles.library} aria-labelledby="blog-library-heading">
        <div className="container">
          <header className={styles.libraryHeader}><h2 id="blog-library-heading">Latest operating guides</h2><p>Use the topic, reading time, and date to choose the most useful next guide. Images are selected from the article topic rather than from one site-wide fallback.</p></header>
          <div className={styles.grid}>
            {posts.map(post => {
              const image = resolveBlogImage(post);
              const published = post.rich?.published ?? post.published;
              const updated = post.rich?.updated ?? post.updated;
              return <a className={styles.card} href={`/blog/${post.slug}`} key={post.slug}>
                <div className={styles.cardMedia}><Image src={image.url} alt={image.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 960px) 50vw, 33vw" /></div>
                <div className={styles.cardBody}>
                  <p className={styles.cardMeta}><span>Operations guide</span>{published ? <time dateTime={published}>{updated && updated !== published ? `Updated ${formatDate(updated)}` : `Published ${formatDate(published)}`}</time> : null}<span>{post.minutes} min read</span></p>
                  <h2>{post.title}</h2><p>{post.excerpt}</p><span className={styles.cardCta}>Read the guide →</span>
                </div>
              </a>;
            })}
          </div>
          <nav className="pagination" aria-label="Blog pages">{Array.from({ length: total }, (_, index) => index + 1).map(number => <a className={number === page ? 'active' : ''} aria-current={number === page ? 'page' : undefined} href={number === 1 ? '/blog' : `/blog/page/${number}`} key={number}>{number}</a>)}</nav>
        </div>
      </section>
      {page === 2 && <FeaturedComparison />}
    </main>
    <Footer />
  </>;
}
export { PAGE_SIZE };
