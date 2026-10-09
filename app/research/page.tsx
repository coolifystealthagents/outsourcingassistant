import { Header, Footer } from "../components";
import { researchPosts } from "../fleet-content";
const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
export const metadata = {
  title: "Research | OutsourcingAssistant.com",
  description:
    "Sourced research about role design, operating controls, and staffing decisions.",
};
const newestFirst = [...researchPosts].sort(
  (a, b) =>
    b.published.localeCompare(a.published) || b.slug.localeCompare(a.slug),
);
export default function Research() {
  return (
    <>
      <Header />
      <main className="fleet-main">
        <section className="fleet-hero">
          <div className="container">
            <p className="eyebrow">Research library</p>
            <h1>Research for planning Philippines-based teams</h1>
            <p className="lead">
              Sourced analysis for designing clear work, access boundaries, and
              review routines.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-card-grid">
            {newestFirst.map((p) => (
              <a
                className="fleet-card"
                href={`/research/${p.slug}`}
                key={p.slug}
              >
                <p className="eyebrow">
                  {p.cluster} · Published <time dateTime={p.published}>{formatDate(p.published)}</time>
                </p>
                <h2>{p.title}</h2>
                <p>{p.excerpt}</p>
                <b>Read the evidence →</b>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
