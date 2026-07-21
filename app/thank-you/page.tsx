import { Footer, Header } from '../components';

export const metadata = {
  title: 'Request received',
  description: 'Your Filipino talent staffing request has been received.',
};

export default function Thanks() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container article">
          <p className="eyebrow">Request received</p>
          <h1>Thanks. Your role details are in.</h1>
          <p className="lead">We&apos;ll review the work, schedule, and tools you shared. If the request fits, a Philippines-focused staffing partner may contact you about Filipino talent and the next step.</p>
          <a className="btn primary" href="/">Back home</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
