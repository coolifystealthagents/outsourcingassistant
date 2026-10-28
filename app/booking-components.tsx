'use client';

import { useEffect, useRef } from 'react';

const reviewSource = 'https://stealthagents.com/';
const reviewSourceRetrieved = '2026-10-19';

// Exact first-party review records rendered by the Stealth Agents homepage.
// Keep wording and attribution unchanged; do not paraphrase these records.
const testimonials = [
  { name: 'Chad Sublet', role: 'Business Owner', quote: 'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.' },
  { name: 'Erika Giron', role: 'CEO, Horizon Pacific Staffing', quote: 'We went from 300 hours a month to over 2,500 hours with Stealth Agents.' },
  { name: 'Alex Behrens', role: 'Client since Oct 2024', quote: 'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.' },
  { name: 'Owen Hone', role: 'Multiple Hire Client', quote: 'Outstanding service. Less than 24-hour VA placement. Fast, high-quality. I have hired multiple times.' },
  { name: 'Sarah Jacoby', role: 'Client', quote: 'Great communication, efficient and proactive assistant, visible business growth.' },
  { name: 'Martine Cadet', role: 'Client', quote: 'The team learned my brand and goals and transformed my business. My dream team.' },
  { name: 'Aisha Wonderfull', role: 'CEO, Publishing Startup', quote: 'Gained time for sales and closed 3 clients within two days. Exceptional service.' },
  { name: 'Rich Cochran', role: 'Client', quote: 'We especially appreciate how diligent and pleasant Evy is. True pros.' },
  { name: 'George Assi', role: '2-Year Partner', quote: 'Agents tackled diverse tasks seamlessly and manager Charm consistently provides excellent talent matches.' },
  { name: 'Lee Maasen', role: 'Business Owner', quote: 'Stealth Agents provided me with a fantastic virtual assistant who has been an absolute asset.' },
  { name: 'Kevin Carabajal', role: 'Client', quote: 'VA George eliminated late-night documentation work, restoring my sleep and enabling proper business planning.' },
  { name: 'Lynda Sunshine West', role: 'Client', quote: 'Paolo is exceptional. Communicative, fast turnaround, quality work every time.' },
  { name: 'McKay Jaeckel', role: 'First-Time Hire', quote: 'The easiest VA onboarding process. Communicative and helpful throughout.' },
  { name: 'Evan', role: 'Long-Term Client', quote: 'Continuously impressed by professionalism, punctuality, attention to detail, and the kind family approach.' },
] as const;

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = viewport.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let previous = performance.now();
    let position = element.scrollLeft;
    const pixelsPerSecond = 24;
    const move = (now: number) => {
      const elapsed = Math.min(now - previous, 50);
      previous = now;
      position += pixelsPerSecond * elapsed / 1000;
      element.scrollLeft = position;
      const first = element.querySelector<HTMLElement>('.sa-testimonial-card');
      const track = element.querySelector<HTMLElement>('.sa-testimonial-track');
      if (first && track) {
        const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0');
        const distance = first.getBoundingClientRect().width + gap;
        if (position >= distance) {
          track.append(first);
          position -= distance;
          element.scrollLeft = position;
        }
      }
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, []);

  const headingId = contact ? 'contact-client-reviews' : 'booking-client-reviews';
  return <section className={`sa-testimonials${contact ? ' sa-testimonials-contact' : ''}`} aria-labelledby={headingId} data-review-count={testimonials.length} data-review-source={reviewSource} data-review-source-retrieved={reviewSourceRetrieved}>
    <div className="sa-testimonial-heading"><h2 id={headingId}>StealthAgents reviews</h2></div>
    <div ref={viewport} className="sa-testimonial-viewport" aria-label="StealthAgents client reviews">
      <div className="sa-testimonial-track">{testimonials.map(review => <article className="sa-testimonial-card" key={review.name}>
        <p className="sa-testimonial-rating" aria-label="Five out of five stars"><span className="sa-review-stars" aria-hidden="true">{Array.from({ length: 5 }, (_, star) => <span className="sa-review-star" key={star} />)}</span> Client review</p>
        <h3>{review.name}</h3><blockquote>“{review.quote}”</blockquote><p>{review.name}, {review.role}</p>
      </article>)}</div>
    </div>
    <p className="sa-testimonial-source">Source: <a href={reviewSource} target="_blank" rel="noopener noreferrer">first-party Stealth Agents client reviews</a>. Wording and attribution retrieved {reviewSourceRetrieved}.</p>
  </section>;
}
