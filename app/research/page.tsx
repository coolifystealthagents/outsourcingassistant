import Image from 'next/image';
import { Header, Footer } from '../components';
import { researchPosts } from '../fleet-content';
import { indexImages, resolveResearchImage } from '../editorial-images';
import styles from '../editorial-index.module.css';

const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', {
  month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
}).format(new Date(`${date}T00:00:00Z`));
export const metadata = {
  title: 'Assistant Operations Research',
  description: 'Sourced research about role design, operating controls, and staffing decisions.',
  alternates: { canonical: '/research' },
};
const newestFirst = [...researchPosts].sort((a, b) => b.published.localeCompare(a.published) || b.slug.localeCompare(a.slug));

export default function Research() {
  return <>
    <Header />
    <main id="main-content" className="fleet-main">
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div><p className="eyebrow">Research library</p><h1>Evidence for planning distributed support teams</h1><p>Sourced analysis for designing clear work, access boundaries, review routines, and evidence trails. Each record identifies its topic and latest public update.</p></div>
          <div className={styles.heroMedia}><Image src={indexImages.research.url} alt={indexImages.research.alt} fill priority sizes="(max-width: 720px) 100vw, 50vw" /></div>
        </div>
      </section>
      <section className={styles.library} aria-labelledby="research-library-heading">
        <div className="container">
          <header className={styles.libraryHeader}><h2 id="research-library-heading">Latest evidence reviews</h2><p>Browse by research cluster, publication date, and subject. Topic matching selects relevant imagery from the approved research library and preserves article-specific images where supplied.</p></header>
          <div className={styles.grid}>{newestFirst.map(post => {
            const image = resolveResearchImage(post);
            return <a className={styles.card} href={`/research/${post.slug}`} key={post.slug}>
              <div className={styles.cardMedia}><Image src={image.url} alt={image.alt} fill sizes="(max-width: 720px) 100vw, (max-width: 960px) 50vw, 33vw" /></div>
              <div className={styles.cardBody}>
                <p className={styles.cardMeta}><span>{post.cluster}</span><time dateTime={post.updated}>{post.updated !== post.published ? `Updated ${formatDate(post.updated)}` : `Published ${formatDate(post.published)}`}</time></p>
                <h2>{post.title}</h2><p>{post.excerpt}</p><span className={styles.cardCta}>Read the evidence →</span>
              </div>
            </a>;
          })}</div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
